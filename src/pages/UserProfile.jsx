import { useState, useEffect } from 'react';

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
    <div className='my-component'>
      <div className='player-avatar'>
        <img src='images/avatar.png' alt='Player Avatar' />
      </div>
      <div className='player-info'>
        <div className='player-name'>{playerData.player_name}</div>
        <div className='player-stats'>
          Total wins: {playerData.total_wins} <br />
          Score: {playerData.score}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
