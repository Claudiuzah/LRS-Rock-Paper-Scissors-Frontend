import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect } from 'react';


function LobbyRoom() {
  const navigate = useNavigate();
  const auth = useAuthUser();
  console.log(auth);

  useEffect(() => {
    if (!auth) {
      navigate('/auth');
      console.log('User is not logged in.');
    } else {
      console.log('User is logged in.');
    }
  }, [auth]);
  if (!auth) return;
  return (
    <main className={styles.background}>
      <div className={styles.centerMultiplayer}>
        <div className={styles.leftLobby}>
          <Link to='/menu'>
            <button className={styles.exitButtonLobby}>
              <img src='video/exist.gif' className={styles.exitGifLobby} />
            </button>
          </Link>
        </div>
       
        <div className={styles.containerMultiplayer}>
          <div className={styles.containerList}>
          <div className={styles.myComponent}>
      <div className={styles.playerAvatar}>
        <img src='images/avatar.png' alt='Player Avatar' className={styles.playerAvatarImg} />
      </div>
      <div className={styles.playerInfo}>
        <div className={styles.playerName}>{auth.name}</div>
        <div className={styles.playerStats}>
          Total wins: 0<br />
          Score: 0xx`x`
        </div>
      </div>
    </div>
            {/* <div className={styles.containerProfile}></div> */}
            <div className={styles.playerList}>players </div>
          </div>
          <div className={styles.titleBox}>
            <div className={styles.multiplayerTitle}>Create room</div>
            <div className={styles.playerLobby}>
              <div className={styles.containerPlayerLb}>
                <div className={styles.playerCard}>Player1</div>
                <div className={styles.playerCard}>Player2</div>
                <div className={styles.playerCard}>Player3</div>
                <div className={styles.playerCard}>Player4</div>
                <div className={styles.playerCard}>Player5</div>
              </div>
              <Link to='/multiplayer'>
                <button className={styles.playButton}>Play</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LobbyRoom;
