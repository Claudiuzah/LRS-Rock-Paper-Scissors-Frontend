// import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

function LeaderBoard() {
  // const navigate = useNavigate();
  const auth = useAuthUser();
  console.log(auth);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.groupContainerMenu}>
        <div className={styles.titleImage}>GOOD WORK</div>

        <div className={styles.greyBox}>
          <div className={styles.top3}>
            <div className={styles.playerContainer}>
              <img src='/images/locul3.png' className={styles.playerImage1} />
              <p className={styles.playerText}> Player3</p>
              <p className={styles.locText}> Position 3</p>
              <p className={styles.pText}> 0 Points</p>
            </div>
            <div className={styles.playerContainer}>
              <img src='/images/locul1.png' className={styles.playerImage} />
              <p className={styles.playerText}> Player1</p>
              <p className={styles.locText}> FIRST</p>
              <p className={styles.pText}> 1 Points</p>
            </div>
            <div className={styles.playerContainer}>
              <img src='/images/locul2.png' className={styles.playerImage1} />
              <p className={styles.playerText}> Player2</p>
              <p className={styles.locText}> Position 2</p>
              <p className={styles.pText}> 0 Points</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttonsBoxMenu}>
        <div className={styles.formMenu}>
          <div className={styles.buttonContainer}>
            <Link to='/menu' className={styles.buttonMenu}>
              Main Menu
              <img src='public\images\home.png' className={styles.leaderboardHome} />
            </Link>
            <Link to='/lobby' className={styles.buttonMenu}>
              Back to lobby
              <img src='video/player.gif' className={styles.multiplayerGif2Menu} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LeaderBoard;
