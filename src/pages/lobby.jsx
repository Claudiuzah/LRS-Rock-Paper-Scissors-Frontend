import '../App.css';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LobbyRoom() {
  const navigate = useNavigate();
  const auth = useAuthUser();
  console.log(auth);

  useEffect(() => {
    if (!auth) {
      navigate('/auth');
      console.log('User is not logged in.');
    } else {
      console.log('User is logged in.');
    }
  }, [auth]);
  if (!auth) return;

  return (
    <>
      <div className='background'>
        <div className='center_multiplayer'>
          <div className='left'>
            <Link to='/menu'>
              <button className='exitbutton'>
                <img src='video/exist.gif' className='exitgif' />
              </button>
            </Link>
          </div>
          <div className='container_multiplayer'>
            <div className='container_list'>
              <div className='container_profile'></div>
              <div className='box_profile'>
                <div className='player-avatar'>
                  <img src='images/avatar.png' alt='Player Avatar' />
                </div>
                <div className='player-info'>
                  <div className='player-name'>Mr. Gabi </div>
                  <div className='player-stats'>
                    Total wins: 0<br />
                    Score: 0
                  </div>
                </div>
              </div>
              <div className='player_list'>Player 1</div>
            </div>
            <div className='title_box'>
              <div className='multiplayer_title'>Create room</div>
              <div className='player_lobby'>
                <div className='container_playerlb'>
                  <div className='player_card'>Player1</div>
                  <div className='player_card'>Player2</div>
                  <div className='player_card'>Player3</div>
                  <div className='player_card'>Player4</div>
                  <div className='player_card'>Player5</div>
                  <div className='player_card'>Player6</div>
                  <div className='player_card'>Player7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LobbyRoom;
