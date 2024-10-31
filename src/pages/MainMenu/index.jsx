import styles from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect } from 'react';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
// import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
// import useWebSocket, { ReadyState } from 'react-use-websocket';

// function Home({ authHeader }) {
//   // const WS_URL = 'ws://172.16.1.71:8000';
//   const WS_URL = 'ws://lrsback-lrs-bd4d9a06.koyeb.app';
//   const token = authHeader.slice(7);
//   const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`${WS_URL}/ws/${token}`, {
//     share: false,
//     shouldReconnect: () => true,
//   });

//   useEffect(() => {
//     if (readyState === ReadyState.OPEN) {
//       sendJsonMessage({
//         event: 'enter lobby',
//         data: {
//           channel: 'lobby ',
//         },
//       });
//     }
//   }, [readyState, sendJsonMessage]);

//   useEffect(() => {
//     if (lastJsonMessage) {
//       console.log(`Got a new message: ${lastJsonMessage}`);
//     }
//   }, [lastJsonMessage]);

//   return;
// }
function MainMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentVolume, setCurrentVolume] = useState(0);
  const navigate = useNavigate();
  const auth = useAuthUser();
  const [showAvatars, setShowAvatars] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('images/avatar.png'); // Avatarul selectat
  const handleAvatarSelection = (avatarPath) => {
    setSelectedAvatar(avatarPath); // Setează avatarul în state
    localStorage.setItem('selectedAvatar', avatarPath); // Salvează avatarul în Local Storage
  };

  // const authHeader = useAuthHeader();

  const signOut = useSignOut();

  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar); // Setează avatarul în state dacă există în Local Storage
    }
  }, []);

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
    <main>
      <button
        type='submit'
        onClick={() => {
          signOut();
          navigate('/auth');
        }}
        className={styles.signOutButton}
      >
        Sign Out
      </button>
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
                    src={selectedAvatar}
                    alt='Player Avatar'
                    className={styles.playerAvatarImg}
                  />
                </div>
                <div className={styles.playerInfo}>
                  <div className={styles.playerName}>{auth.name}</div>
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
        title='Settings'
      >
        <div>
          <h3>Volum</h3>
          <div className={styles.volumeControl}>
            <input
              type='range'
              min='0'
              max='100'
              value={currentVolume}
              onChange={(e) => setCurrentVolume(e.target.value)}
            />
            <span className={styles.volumePercent}>{currentVolume}%</span>
          </div>
          <button
            className={styles.chooseAvatarButton}
            onClick={() => setShowAvatars(!showAvatars)}
          >
            Alegeți Avatarul
          </button>
          {showAvatars && (
            <div className={styles.avatarSelection}>
              {Array.from({ length: 20 }, (_, i) => (
                <button
                  key={i}
                  className={styles.avatarButton}
                  onClick={() => handleAvatarSelection(`images/avatari/A${i + 1}.png`)}
                >
                  <img src={`images/avatari/A${i + 1}.png`} alt={`Avatar A${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </Modal>
      {/* <Home authHeader={authHeader} /> */}
    </main>
  );
}

export default MainMenu;
