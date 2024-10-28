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

  // const authHeader = useAuthHeader();

  const signOut = useSignOut();

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
                    src='images/avatar.png'
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
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A1 selectat")}>
                <img src='images/avatari/A1.png' alt='Avatar A4' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A2 selectat")}>
                <img src='images/avatari/A2.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A3 selectat")}>
                <img src='images/avatari/A3.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A4 selectat")}>
                <img src='images/avatari/A4.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A5 selectat")}>
                <img src='images/avatari/A5.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A6 selectat")}>
                <img src='images/avatari/A6.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A7 selectat")}>
                <img src='images/avatari/A7.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A8 selectat")}>
                <img src='images/avatari/A8.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A9 selectat")}>
                <img src='images/avatari/A9.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A10 selectat")}>
                <img src='images/avatari/A10.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A11 selectat")}>
                <img src='images/avatari/A11.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A12 selectat")}>
                <img src='images/avatari/A12.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A13 selectat")}>
                <img src='images/avatari/A13.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A14 selectat")}>
                <img src='images/avatari/A14.png' alt='Avatar A3' />
              </button>
              <button
                className={styles.avatarButton}
                onClick={() => console.log("Avatar A15 selectat")}>
                <img src='images/avatari/A15.png' alt='Avatar A3' />
              </button>
            </div>
          )}
        </div>
      </Modal>
      {/* <Home authHeader={authHeader} /> */}
    </main>
  );
}

export default MainMenu;
