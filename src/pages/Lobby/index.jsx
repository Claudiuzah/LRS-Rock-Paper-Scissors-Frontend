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
import { WS_URL } from '../../components/constants';

function LobbyRoom() {
  const [allPlayers, setAllPlayers] = useState([]); // List of all players
  const [lobbyPlayers, setLobbyPlayers] = useState([]); // List of players in the lobby
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [readyPlayers, setReadyPlayers] = useState([]);
  const [readyPlayer, setReadyPlayer] = useState(false);
  const [avatar, setAvatar] = useState('images/avatar.png'); // Avatar implicit

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    `${WS_URL}/ws/${authHeader.slice(7)}`,
    {
      share: false,
      shouldReconnect: () => true,
    },
  );

  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      setAvatar(savedAvatar); // Setează avatarul din Local Storage dacă există
    }
  }, []);

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      console.log('WebSocket connection established.');
      sendJsonMessage({
        event: 'enter lobby',
        data: {
          channel: 'lobby',
          name: auth.name,
        },
      });
    }
  }, [readyState, sendJsonMessage, auth.name]);

  useEffect(() => {
    if (lastJsonMessage) {
      console.log('New message received: ', lastJsonMessage);

      if (lastJsonMessage.type == 'readyPlayers') {
        const allReadyPlayers = lastJsonMessage.readyPlayers || [];
        setReadyPlayers(allReadyPlayers);
      }

      if (lastJsonMessage.type === 'allPlayersUpdate') {
        // Update the list of all players
        const allPlayersList = lastJsonMessage.players || [];
        setAllPlayers(allPlayersList);
      }

      if (lastJsonMessage.type === 'playerUpdate') {
        // Update the list of players in the lobby based on tokens
        const playersInLobby = lastJsonMessage.players || [];
        setLobbyPlayers(playersInLobby);

        const playerNamesPromises = playersInLobby.map((token) => {
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
            setLobbyPlayers(filteredNames);
          })
          .catch((err) => console.error('Error processing player names: ', err));
      }
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    if (!auth) {
      navigate('/auth');
      console.log('User is not logged in.');
    } else {
      console.log('User is logged in.');
    }
  }, [auth, navigate]);

  if (!auth) return null;

  const handleReadyClick = () => {
    setReadyPlayer(!readyPlayer);
    sendJsonMessage({
      event: 'player ready',
      data: {
        name: auth.name,
        ready: !readyPlayer,
      },
    });
  };

  return (
    <main className={styles.background}>
      <div className={styles.centerMultiplayer}>
        <div className={styles.leftLobby}>
          <Link to='/menu'>
            <button
              className={styles.exitButtonLobby}
              onClick={() => {
                new Audio('/audio/scissorssound.wav').play();
              }}
            >
              <img src='video/exist.gif' className={styles.exitGifLobby} alt='Exit' />
            </button>
          </Link>
        </div>
        <div className={styles.containerMultiplayer}>
          <div className={styles.containerList}>
            <div className={styles.containerProfile}></div>
            <div className={styles.boxProfile}>
              <div className={styles.playerAvatar}>
                <img src={avatar} alt='Player Avatar' className={styles.playerAvatarImg} />
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
              All Players:
              <ScrollArea.Autosize mah={650} maw={400} mx='auto'>
                {allPlayers.length > 0 ? (
                  allPlayers.map((player, index) => (
                    <div key={index} className={styles.playerStats}>
                      <div className={styles.playerCardOnline}>
                        <div className={styles.iconContainer}>
                          <img
                            src={avatar}
                            className={styles.playerProfileImg}
                            alt='Player Profile'
                          />
                          <div
                            className={
                              player.online ? styles.statusCircleOnline : styles.statusCircleOffline
                            }
                          ></div>
                        </div>
                        {player.username}
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
                {lobbyPlayers.length > 0 ? (
                  lobbyPlayers.map((player, index) => (
                    <div key={index} className={styles.playerStats}>
                      <div className={styles.playerCard}>
                        <strong className={styles.statisticsContainer}>
                          <img
                            src={avatar}
                            className={styles.playerProfileImg}
                            alt='Player Profile'
                          />
                          {player}
                          {readyPlayers.length >= 1 &&
                          readyPlayers.some((state) => state === player) ? (
                            <span className={styles.readyText}> (Ready)</span>
                          ) : (
                            <span className={styles.readyText}></span>
                          )}
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
                    body: {
                      backgroundImage: 'url(/images/bg.png)',
                      width: '100%',
                      height: '100%',
                      maxHeight: '94vh',
                    },
                    modal: {
                      color: 'white',
                      padding: '20px',
                    },
                    header: {
                      backgroundColor: '#ccc', // Optional: Change header background color
                    },
                  }}
                >
                  <MultiPly players={lobbyPlayers} />
                </Modal>

                <button
                  onClick={() => {
                    handleReadyClick;
                    new Audio('/audio/scissorssound.wav').play();
                  }}
                  className={styles.playButton}
                >
                  {readyPlayer ? 'Unready' : 'Ready'}
                </button>
                {readyPlayers.size == lobbyPlayers.length && (
                  <button onClick={open} className={styles.playButton}>
                    Start Game
                  </button>
                )}
                {lobbyPlayers.length >= 2 ? (
                  readyPlayers.length === lobbyPlayers.length && (
                    <button onClick={open} className={styles.playButton}>
                      Start Game
                    </button>
                  )
                ) : (
                  <button onClick={close} className={styles.playButton}>
                    Waiting for players...
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LobbyRoom;
