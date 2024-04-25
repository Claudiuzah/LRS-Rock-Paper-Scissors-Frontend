import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './index.module.css';

function MultiPlayer() {
  const [remainingTime, setRemainingTime] = useState(15);

  useEffect(() => {
    let timer;

    const updateTimer = () => {
      setRemainingTime((prevTime) => prevTime - 1);
    };

    timer = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timer);
      setRemainingTime(20);
    };
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      setRemainingTime(20);
    }
  }, [remainingTime]);

  return (
    <div>
      <Link to='/menu'>
        <button className={styles.exitButtonM}>
          <img src='video/exist.gif' className={styles.exitGifM} alt='Exit' />
        </button>
      </Link>
      <div className={styles.containerT}>
        <button className={styles.clockButton}>
          <img src='video/clock.gif' className={styles.clockImg} alt='Clock' />
          <div id='timer' className={styles.timerT}>
            {remainingTime}
          </div>
        </button>
      </div>
      <div className={styles.containerTABLE}>
        <img src='images/table.png' className={styles.tableM} alt='Table' />
        <div className={styles.player_lobby}>
          <div className={styles.container_playerlb}>
            <div className={styles.playerCard}>Player1</div>
            <div className={styles.playerCard}>Player2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiPlayer;
