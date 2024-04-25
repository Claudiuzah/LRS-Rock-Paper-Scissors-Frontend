import '../App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
        <button className='exitbutton'>
          <img src='video/exist.gif' className='exitgif' alt='Exit' />
        </button>
      </Link>
      <div className='containerT'>
        <button className='clockbutton'>
          <img src='video/clock.gif' className='clockImg' alt='Clock' />
          <div id='timer' className='timerT'>
            {remainingTime}
          </div>
        </button>
      </div>
      <div className='containerTABLE'>
        <img src='images/table.png' className='tableM' alt='Table' />
        <div className='player_lobby'>
          <div className='container_playerlb'>
            <div className='player_card'>Player1</div>
            <div className='player_card'>Player2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiPlayer;
