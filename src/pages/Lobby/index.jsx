import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { jwtDecode } from 'jwt-decode';

import { useDisclosure } from '@mantine/hooks';
import { Modal, ScrollArea } from '@mantine/core';
import MultiPly from '../../components/MultiPlayer2v2';

function Home({ authHeader, setPlayers }) {
  const auth = useAuthUser();
  const WS_URL = 'wss://lrsback-lrs-bd4d9a06.koyeb.app';
  const token = authHeader.slice(7);
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`${WS_URL}/ws/${token}`, {
    share: false,
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        event: 'enter lobby',
        data: {
          channel: 'lobby ',
          name: auth.name,
        },
      });
    }
  }, [readyState, sendJsonMessage, auth.name]);

  useEffect(() => {
    if (lastJsonMessage) {
      console.log(`Got a new message: `, lastJsonMessage);

      // Handle player updates
      if (lastJsonMessage.type === 'playerUpdate') {
        // Extract the JWT tokens from players array
        const newPlayers = lastJsonMessage.players;

        // Extract usernames from the JWTs
        const playerNamesPromises = newPlayers.map((token) => {
          // Check if the token is valid
          if (typeof token !== 'string') {
            console.error('Invalid token:', token);
            return Promise.resolve(null); // Return null if token is invalid
          }
          try {
            const decoded = jwtDecode(token); // Decode the JWT
            return decoded.sub; // Adjust based on the actual key in the decoded JWT payload
          } catch (error) {
            console.error('Error decoding JWT: ', error);
            return null; // Handle decoding errors
          }
        });

        Promise.all(playerNamesPromises)
          .then((playerNames) => {
            // Filter out any null values
            const filteredNames = playerNames.filter((name) => name !== null);
            // Update players in the parent component
            setPlayers(filteredNames);
          })
          .catch((err) => console.error('Error processing player names: ', err));
      }
    }
  }, [lastJsonMessage, setPlayers]);

  return null; // This component doesn't render anything
}

function LobbyRoom() {
  const navigate = useNavigate();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const [players, setPlayers] = useState([]);

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!auth) {
      navigate('/auth');
      console.log('User is not logged in.');
    } else {
      console.log('User is logged in.');
    }
  }, [auth, navigate]);

  if (!auth) return null;

  return (
    <main className={styles.background}>
      <div className={styles.centerMultiplayer}>
        <div className={styles.leftLobby}>
          <Link to='/menu'>
            <button className={styles.exitButtonLobby}>
              <img src='video/exist.gif' className={styles.exitGifLobby} alt='Exit' />
            </button>
          </Link>
        </div>
        <div className={styles.containerMultiplayer}>
          <div className={styles.containerList}>
            <div className={styles.containerProfile}></div>
            <div className={styles.boxProfile}>
              <div className={styles.playerAvatar}>
                <img
                  src='images/avatar.png'
                  alt='Player Avatar'
                  className={styles.playerAvatarImg}
                />
              </div>
              <div className={styles.playerInfo}>
                <div className={styles.playerName}>{auth.name}</div>
                <div className={styles.playerStats}>
                  Total wins: 0<br />
                  Score: 0
                </div>
              </div>
            </div>
            {/* This was hardcoded; it should use players state */}

            <div className={styles.playerList}>
              Connected Players:
              <ScrollArea.Autosize mah={650} maw={400} mx='auto'>
                {players.length > 0 ? (
                  players.map((player, index) => (
                    <div key={index} className={styles.playerStats}>
                      <div className={styles.playerCardOnline}>
                        <strong className={styles.statisticsContainerOnline}>
                          <img
                            src='images/playerprofile.png'
                            className={styles.playerProfileImgOnline}
                          />
                          {player}
                        </strong>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles.playerCard}>No players connected</div>
                )}
              </ScrollArea.Autosize>
            </div>
          </div>
          <div className={styles.titleBox}>
            <div className={styles.multiplayerTitle}>Create room</div>
            <div className={styles.playerLobby}>
              <div className={styles.containerPlayerLb}>
                {players.length > 0 ? (
                  players.map((player, index) => (
                    <div key={index} className={styles.playerStats}>
                      <div className={styles.playerCard}>
                        <strong className={styles.statisticsContainer}>
                          <img src='images/playerprofile.png' className={styles.playerProfileImg} />
                          {player}
                        </strong>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles.playerCard}>No players connected</div>
                )}
              </div>
              <div>
                <Modal
                  opened={opened}
                  onClose={close}
                  title='Multiplayer game'
                  fullScreen
                  radius={0}
                  transitionProps={{ transition: 'fade', duration: 200 }}
                  styles={{
                    modal: {
                      backgroundImage: 'url(public/images/bg.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      color: 'white', // Change text color for better readability
                      padding: '20px', // Add some padding Change this to your desired background color
                    },
                    header: {
                      backgroundColor: '#ccc', // Optional: Change header background color
                    },
                  }}
                >
                  <MultiPly />
                </Modal>

                <button onClick={open} className={styles.playButton}>
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home authHeader={authHeader} setPlayers={setPlayers} />
    </main>
  );
}

export default LobbyRoom;
