import { Link } from 'react-router-dom';
import '../App.css';

function Startpage() {
  return (
    <div className='group-container'>
      <div className='centeredstart'>
        <div>
          <img src='images/title.png' className='titleimage' alt='' />
          <img src='video/crown.gif' className='crown' />
        </div>
        <Link to='/auth'>
          <button className='buttonstart'>
            <span>Play</span>
            <img src='video/player.gif' className='playergifstart' />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Startpage;
