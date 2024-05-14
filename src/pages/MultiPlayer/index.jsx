import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Modal, Button, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

function MultiPlayer() {
  const [remainingTime, setRemainingTime] = useState(15);
  const [modalOpened] = useState(false);
  const navigate = useNavigate();
  const auth = useAuthUser();
  console.log(auth);
  const { open, close } = useDisclosure();
  useEffect(() => {
    let timer;

    const updateTimer = () => {
      setRemainingTime((prevTime) => prevTime - 1);
    };

    timer = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timer);
      setRemainingTime(20);
    };
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      setRemainingTime(20);
    }
  }, [remainingTime]);

  const handleExitButtonClick = () => {
    open();
  };

  const handleYesClick = () => {
    navigate('/lobby');
    close();
  };

  const handleNoClick = () => {
    close();
  };
  useEffect(() => {
    if (!auth) {
      navigate('/auth');
      console.log('User is not logged in.');
    } else {
      console.log('User is logged in.');
    }
  }, [auth, navigate]);
  if (!auth) return;

  return (
    <main>
      <Modal opened={modalOpened} onClose={close} size='auto' centered>
        <Text>Are you sure you want to exit?</Text>

        <Group mt='xl'>
          <Button onClick={handleYesClick}>Yes</Button>
          <Button onClick={handleNoClick}>No</Button>
        </Group>
      </Modal>
      <Link to='/lobby'>
        <button onClick={handleExitButtonClick} className={styles.exitButtonM}>
          <img src='video/exist.gif' className={styles.exitGifM} alt='Exit' />
        </button>
      </Link>
      <div className={styles.containerT}>
        <button className={styles.clockButton}>
          <img src='video/clock.gif' className={styles.clockImg} alt='Clock' />
          <div id='timer' className={styles.timerT}>
            {remainingTime}
          </div>
        </button>
      </div>
      <div className={styles.containerTable}>
        <img src='images/table.png' className={styles.tableM} alt='Table' />
        <div className={styles.playerCard1}>Player1</div>
        <div className={styles.playerCard2}>Player2</div>
        <div className={styles.playerCard3}>Player3</div>
        <div className={styles.playerCard4}>Player4</div>
        <div className={styles.playerCard5}>Player5</div>
        <div className={styles.myComponent}>
          <img src='images/avatar.png' alt='Player Avatar' className={styles.avatar} />
          <div className={styles.avatar}>
            <div className={styles.playerName}>{auth.name}</div>
            <div className={styles.playerStats}>
              Total wins: 0<br />
              Score: 0
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MultiPlayer;
