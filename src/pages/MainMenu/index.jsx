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
  const navigate = useNavigate();
  const auth = useAuthUser();
  const [showAvatars, setShowAvatars] = useState(false);
  const [showAvatarsAV, setShowAvatarsAV] = useState(false);

  const [selectedAvatar, setSelectedAvatar] = useState('images/avatar.png'); // Avatarul selectat
  const handleAvatarSelection = (avatarPath) => {
    setSelectedAvatar(avatarPath); // Setează avatarul în state
    localStorage.setItem('selectedAvatar', avatarPath); // Salvează avatarul în Local Storage
  };
  const [showSounds] = useState(false);
  // const [selectedSounds, setSelectedSounds] = useState([]);
  // const handleSoundButtonClick = (soundName) => {
  //   setSelectedSounds((prevSelected) => {
  //     // Dacă butonul este deja selectat, îl eliminăm din listă (deselectare)
  //     if (prevSelected.includes(soundName)) {
  //       return prevSelected.filter((sound) => sound !== soundName);
  //     }
  //     // Dacă nu este selectat, îl adăugăm (selectare)
  //     return [...prevSelected, soundName];
  //   });
  // };

  // const authHeader = useAuthHeader();
  const soundButtons = ['rockSound', 'paperSound', 'scrissorsSound'];

  const [selectedButtons, setSelectedButtons] = useState([false, false, false]);
  const toggleButton = (index) => {
    setSelectedButtons((prev) => {
      const newSelection = [...prev]; // Copiază starea actuală
      newSelection[index] = !newSelection[index]; // Inversează starea doar pentru butonul apăsat
      return newSelection;
    });
  };

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
          new Audio('/audio/scissorssound.wav').play();
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
                <button
                  className={styles.buttonMenu}
                  onClick={() => {
                    new Audio('/audio/scissorssound.wav').play();
                  }}
                >
                  <span>Singleplayer</span>
                  <img src='video/player.gif' className={styles.playerGifMenu} />
                </button>
              </Link>
              <Link to='/lobby'>
                <button
                  className={styles.buttonMenu}
                  onClick={() => {
                    new Audio('/audio/scissorssound.wav').play();
                  }}
                >
                  <span>Multiplayer</span>
                  <img src='video/player.gif' className={styles.multiplayerGif1Menu} />
                  <img src='video/player.gif' className={styles.multiplayerGif2Menu} />
                  <img src='video/player.gif' className={styles.multiplayerGif3Menu} />
                </button>
              </Link>
              <button
                type='button'
                onClick={() => {
                  open();
                  new Audio('/audio/scissorssound.wav').play();
                }}
                className={styles.buttonMenu}
              >
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
        // sx={{
        //   // backgroundColor: red(0, 0, 0, 0.85)
        //   borderRadius: 50px,
        //   padding: 20px
        //   color: white;
        // }}
      >
        <div className={styles.containerButoane}>
          <button
            className={styles.chooseAvatarButton}
            onClick={() => {
              setShowAvatars(!showAvatars);
              new Audio('/audio/scissorssound.wav').play();
            }}
          >
            <h3>AVATARS</h3>
          </button>
          {showAvatars && (
            <div className={styles.avatarSelection}>
              {Array.from({ length: 20 }, (_, i) => (
                <button
                  key={i}
                  className={styles.avatarButton}
                  onClick={() => {
                    handleAvatarSelection(`images/avatari/A${i + 1}.png`);
                    new Audio('/audio/scissorssound.wav').play();
                  }}
                >
                  <img src={`images/avatari/A${i + 1}.png`} alt={`Avatar A${i + 1}`} />
                </button>
              ))}
            </div>
          )}
          <button
            className={styles.chooseAvatarButtonMinimal}
            onClick={() => {
              setShowAvatarsAV(!showAvatarsAV);
              new Audio('/audio/scissorssound.wav').play();
            }}
          >
            <h5>*</h5>
          </button>
          {showAvatarsAV && (
            <div className={styles.avatarSelection}>
              {Array.from({ length: 20 }, (_, i) => (
                <button
                  key={i}
                  className={styles.avatarButton}
                  onClick={() => {
                    handleAvatarSelection(`images/avatari/AV${i + 1}.jpg`);
                    new Audio('/audio/scissorssound.wav').play();
                  }}
                >
                  <img src={`images/avatari/AV${i + 1}.jpg`} alt={`Avatar AV${i + 1}`} />
                </button>
              ))}
            </div>
          )}
          <Link to='/lboard'>
            <button
              className={styles.chooseAvatarButton}
              onClick={() => {
                new Audio('/audio/scissorssound.wav').play();
              }}
            >
              <h3>LEADERBOARD</h3>
            </button>
          </Link>
          {/* <button className={styles.soundToggleButton} onClick={() => setShowSounds(!showSounds)}>
            <h3>Buttons sound</h3>
          </button> */}
          {showSounds && (
            <div className={styles.soundButtonsContainer}>
              {soundButtons.map((sound, index) => (
                <button
                  key={index}
                  className={`${styles.soundButton} ${selectedButtons[index] ? styles.selected : ''}`}
                  onClick={() => toggleButton(index)}
                >
                  <img src={`public/images/${sound}.png`} alt={`sound ${sound}`} />
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
