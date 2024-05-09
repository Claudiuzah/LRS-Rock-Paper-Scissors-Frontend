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
      <div className={styles.containerTable}>
        <img src='images/table.png' className={styles.tableM} alt='Table' />
        <div className={styles.playerCard1}>Playero1</div>
        <div className={styles.playerCard2}>Playero2</div>
        <div className={styles.playerCard3}>Playero3</div>
        <div className={styles.playerCard4}>Playero4</div>
        <div className={styles.playerCard5}>Playero5</div>

        <img scr='/images/avatar.png' className={styles.avatar} />
      </div>
    </div>
  );
}

export default MultiPlayer;
