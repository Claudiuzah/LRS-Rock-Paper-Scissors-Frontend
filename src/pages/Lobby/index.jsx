import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect, useState } from 'react';

import useWebSocket, { ReadyState } from 'react-use-websocket';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

function Home({ authHeader }) {
  const auth = useAuthUser();
  // const WS_URL = 'ws://172.16.1.71:8000';
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
  }, [readyState, sendJsonMessage]);

  useEffect(() => {
    if (lastJsonMessage) {
      console.log(`Got a new message: `, lastJsonMessage);
    }
  }, [lastJsonMessage]);

  return;
}

function LobbyRoom() {
  const navigate = useNavigate();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const [players, setPlayers] = useState([auth.name]);

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
            <div className={styles.playerList}>Player 1</div>
          </div>
          <div className={styles.titleBox}>
            <div className={styles.multiplayerTitle}>Create room</div>
            <div className={styles.playerLobby}>
              <div className={styles.containerPlayerLb}>
                {players.map((player, index) => (
                  <div key={index} className={styles.playerCard}>
                    {player}
                    {setPlayers}
                  </div>
                ))}
              </div>
              <Link to='/multiplayer'>
                <button className={styles.playButton}>Play</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Home authHeader={authHeader} />
    </main>
  );
}

export default LobbyRoom;
