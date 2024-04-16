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
      <img src='video/clock.gif' className='clockM' alt='Clock' />
      <div className='clockContainer'>
        <div id='timer' className='timer'>
          {remainingTime}
        </div>
      </div>
      <div className='container'>
        <img src='images/table.png' className='tableM' alt='Table' />
      </div>
    </div>
  );
}

export default MultiPlayer;
