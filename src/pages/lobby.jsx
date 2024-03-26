import '../App.css';

// import { Link } from "react-router-dom";

function Multiplayer() {
  return (
    <>
      <div className='background'>
        <div className='center_multiplayer'>
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
              <div className='player_lobby'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Multiplayer;
