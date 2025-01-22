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
              <img src='public\images\avatari\A3.png' className={styles.playerImage1} />
              <p className={styles.playerText}> Gabi</p>
              <p className={styles.locText}> Position 3</p>
              <p className={styles.pText}> 7 Points</p>
            </div>
            <div className={styles.playerContainer}>
              <img src='public\images\avatari\A2.png' className={styles.playerImage} />
              <p className={styles.playerText}> ale</p>
              <p className={styles.locText}> FIRST</p>
              <p className={styles.pText}> 9 Points</p>
            </div>
            <div className={styles.playerContainer}>
              <img src='public\images\avatari\A1.png' className={styles.playerImage1} />
              <p className={styles.playerText}> Amalia</p>
              <p className={styles.locText}> Position 2</p>
              <p className={styles.pText}> 8 Points</p>
            </div>
          </div>
          <div className={styles.leaderboardList}>
            <div className={styles.leaderboardRow}>
              <div className={styles.rank}>Rank</div>
              <div className={styles.nickname}>Nickname</div>
              <div className={styles.points}>Total Points</div>
            </div>
            <div className={styles.leaderboardRow}>
              <div className={styles.rank}>1</div>
              <div className={styles.nickname}>claudiu</div>
              <div className={styles.points}>6</div>
            </div>
            <div className={styles.leaderboardRow}>
              <div className={styles.rank}>2</div>
              <div className={styles.nickname}>cosmin</div>
              <div className={styles.points}>5</div>
            </div>
            <div className={styles.leaderboardRow}>
              <div className={styles.rank}>3</div>
              <div className={styles.nickname}>raluca</div>
              <div className={styles.points}>4</div>
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
