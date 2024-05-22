import styles from './index.module.css';
import { Link } from 'react-router-dom';
// import { useDisclosure } from '@mantine/hooks';
// import { Modal } from '@mantine/core';
// import { useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
// import { useEffect } from 'react';
// import useSignOut from 'react-auth-kit/hooks/useSignOut';

function LeaderBoard() {
  //   const [opened, { open, close }] = useDisclosure(false);
  //   const [currentVolume, setCurrentVolume] = useState();
  //   const [currentSoundType, setCurrentSoundType] = useState();
  //   const navigate = useNavigate();
  const auth = useAuthUser();
  console.log(auth);

  //   const signOut = useSignOut();

  //   useEffect(() => {
  //     if (!auth) {
  //       navigate('/auth');
  //       console.log('User is not logged in.');
  //     } else {
  //       console.log('User is logged in.');
  //     }
  //   }, [auth]);
  //   if (!auth) return;
  return (
    <main>
      {/* <button
        type='submit'
        onClick={() => {
          signOut();
          navigate('/auth');
        }}
      >
        Sign Out
      </button> */}
      <div>
        <div className={styles.groupContainerMenu}>
          <div className={styles.buttonsBoxMenu}>
            <div className={styles.formMenu}>
              <Link to='/menu'>
                <button className={styles.buttonMenu}>
                  <span>Main Menu</span>
                  <img src='video/player.gif' className={styles.playerGifMenu} />
                </button>
              </Link>
              <Link to='/lobby'>
                <button className={styles.buttonMenu}>
                  <span>Lobby</span>
                  <img src='video/player.gif' className={styles.multiplayerGif1Menu} />
                  <img src='video/player.gif' className={styles.multiplayerGif2Menu} />
                  {/* <img src='video/player.gif' className={styles.multiplayerGif3Menu} /> */}
                </button>
              </Link>
              <div className={styles.myComponent}>
                <div className={styles.playerInfo}>
                  {/* <div className={styles.playerName}>{auth.name}</div> */}
                  <div className={styles.playerStats}>
                    Points: 0<br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LeaderBoard;