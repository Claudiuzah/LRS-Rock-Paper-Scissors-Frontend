import '../App.css';
import { Link } from 'react-router-dom';

function MultiPlayer() {
  return (
    <div>
      <div className='left'>
        <Link to='/menu'>
          <button className='exitbutton'>
            <img src='video/exist.gif' className='exitgif' />
          </button>
        </Link>
      </div>
      <div>
        <img src='video/clock.gif' className='clockM' />
        <img src='images/table.png' className='tableM' />
      </div>
    </div>
  );
}

export default MultiPlayer;
