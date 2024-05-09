import { useState, useEffect } from 'react';
import styles from './index.module.css';

function MyComponent() {
  const [playerData, setPlayerData] = useState({
    player_name: '',
    total_wins: 0,
    score: 0,
  });

  useEffect(() => {
    fetch('/profil_utilizator')
      .then((response) => response.json())
      .then((data) => {
        setPlayerData(data);
      })
      .catch((error) => {
        console.error('A apărut o eroare:', error);
      });
  }, []);

  return (
    <main className={styles.my_component}>
      <div className={styles.player_avatar}>
        <img src='images/avatar.png' alt='Player Avatar' />
      </div>
      <div className={styles.player_info}>
        <div className={styles.player_name}>{playerData.player_name}</div>
        <div className={styles.player_stats}>
          Total wins: {playerData.total_wins} <br />
          Score: {playerData.score}
        </div>
      </div>
    </main>
  );
}

export default MyComponent;
