import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Startpage() {
  return (
    <main className={styles.groupcontainer}>
      <div className={styles.centeredstart}>
        <div>
          <img src='images\title.png' className={styles.titleimage} alt='' />
          <img src='video\crown.gif' className={styles.crown} />
        </div>
        <Link to='/auth'>
          <button className={styles.buttonstart}>
            <span>Play</span>
            <img src='video\player.gif' className={styles.playergifstart} />
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Startpage;
