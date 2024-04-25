import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useState } from 'react';
import styles from './index.module.css';

function MainMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentVolume, setCurrentVolume] = useState();
  const [currentSoundType, setCurrentSoundType] = useState();
  return (
    <>
      <div>
        <div className={styles.groupContainerMenu}>
          <img src='./images/title.png' className={styles.titleImageMenu} />
          <img src='./video/crown.gif' className={styles.crownMenu} />
          <div className={styles.buttonsBoxMenu}>
            <div className={styles.formMenu}>
              <Link to='/single'>
                <button className={styles.buttonMenu}>
                  <span>Singleplayer</span>
                  <img src='video/player.gif' className={styles.playerGifMenu} />
                </button>
              </Link>
              <Link to='/lobby'>
                <button className={styles.buttonMenu}>
                  <span>Multiplayer</span>
                  <img src='video/player.gif' className={styles.multiplayerGif1Menu} />
                  <img src='video/player.gif' className={styles.multiplayerGif2Menu} />
                  <img src='video/player.gif' className={styles.multiplayerGif3Menu} />
                </button>
              </Link>
              <button type='button' onClick={open} className={styles.buttonMenu}>
                <span>Settings</span>
                <img src='video/settings.gif' className={styles.settingsGifMenu} />
              </button>
              <div className={styles.myComponent}>
                <div className={styles.playerAvatar}>
                  <img
                    src='images/avatar.png'
                    alt='Player Avatar'
                    className={styles.playerAvatarImg}
                  />
                </div>
                <div className={styles.playerInfo}>
                  <div className={styles.playerName}>Mr. Gabi </div>
                  <div className={styles.playerStats}>
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
