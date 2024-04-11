import '../App.css';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useState } from 'react';

function MainMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentVolume, setCurrentVolume] = useState();
  const [currentSoundType, setCurrentSoundType] = useState();
  return (
    <>
      <div>
        <div className='groupcontainer_menu'>
          <img src='./images/title.png' className='titleimagemenu' />
          <img src='./video/crown.gif' className='crownmenu' />
          <div className='buttonsboxmenu'>
            <div className='formmenu'>
              <Link to='/single'>
                <button className='buttonmenu'>
                  <span>Singleplayer</span>
                  <img src='video/player.gif' className='playergifmenu' />
                </button>
              </Link>
              <Link to='/lobby'>
                <button className='buttonmenu'>
                  <span>Multiplayer</span>
                  <img src='video/player.gif' className='multiplayergif1menu' />
                  <img src='video/player.gif' className='multiplayergif2menu' />
                  <img src='video/player.gif' className='multiplayergif3menu' />
                </button>
              </Link>
              <button type='button' onClick={open} className='buttonmenu'>
                <span>Settings</span>
                <img src='video/settings.gif' className='settingsgifmenu' />
              </button>
              <div className='my-component'>
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
            </div>
          </div>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered={true}
        lockScroll={false}
        title='Setări sunet'
      >
        <div>
          <h3>Volum</h3>
          <input
            type='range'
            min='0'
            max='100'
            value={currentVolume}
            onChange={(e) => setCurrentVolume(e.target.value)}
          />
        </div>
        <div>
          <h3>Tip de sunet</h3>
          <select value={currentSoundType} onChange={(e) => setCurrentSoundType(e.target.value)}>
            <option value='default'>Implicit</option>
            <option value='loud'>Tare</option>
            <option value='soft'>Slab</option>
          </select>
        </div>
      </Modal>
    </>
  );
}

export default MainMenu;
