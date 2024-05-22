import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Modal, Button, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

const actions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

export function Calculatewinner(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1] === action2) {
    return -1;
  } else if (actions[action2] === action1) {
    return 1;
  }
  return null;
}
export function Scissors() {
  return <img src='./images/scissors.png' className={styles.scissors} />;
}
export function Rock() {
  return <img src='./images/rock.png' className={styles.rock} />;
}
export function Paper() {
  return <img src='./images/paper.png' className={styles.paper} />;
}
export function Actionicon({ action, ...props }) {
  const icons = {
    rock: Rock,
    paper: Paper,
    scissors: Scissors,
  };
  const Icon = icons[action];

  return <Icon {...props} />;
}
export function Player({ name = 'Player', score = 0, action = 'rock' }) {
  return (
    <main className={styles.playerSingle}>
      <div className={styles.scoreSingle}>{`${name}: ${score}`}</div>
      <div className={styles.actionSingle}>
        {action && <Actionicon action={action} size={300} />}
      </div>
    </main>
  );
}

export function Actionbutton({ action = 'rock', onActionSelected }) {
  return (
    <button className={styles.roundBtn} onClick={() => onActionSelected(action)}>
      <Actionicon action={action} size={50} />
    </button>
  );
}

export function Showwinner({ winner = 0 }) {
  const text = {
    '-1': 'You win!',
    0: "It's a tie!",
    1: 'You lose!',
  };
  return <h2>{text[winner]}</h2>;
}
export function Winnermessage({ finalScoreP, finalScoreC }) {
  return (
    <>
      {finalScoreP > finalScoreC ? (
        <main className={styles.backgroundRoundM}>
          <div className={styles.winBox}>
            <h2 className={styles.h2}>You win!</h2>
            <img src='video/confetti.gif' className={styles.confettiGif} />
            <h3 className={styles.h3}>Player: {finalScoreP} points</h3>
            <h3 className={styles.h3}>Bot: {finalScoreC} points</h3>
            <Link to='/menu'>
              <button className={styles.winButton}>exit</button>
            </Link>
          </div>
        </main>
      ) : (
        <main className={styles.backgroundRoundM}>
          <div className={styles.winBox}>
            <h2 className={styles.h2}>You win!</h2>
            <h3 className={styles.h3}>Player: {finalScoreP} points</h3>
            <h3 className={styles.h3}>Bot: {finalScoreC} points</h3>
            {/* <Link to='/lobby'> */}
            <button className={styles.winButton}>exit</button>
            {/* </Link> */}
          </div>
          <img src='video/rain.gif' className={styles.rainGif} />
        </main>
      )}
    </>
  );
}
export function Roundmessage({ round }) {
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    setShowMessage(true);
    function wait(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    }

    async function Dissapear() {
      await wait(1000); // Wait for 2000 milliseconds (2 seconds)
      setShowMessage(false);
    }

    Dissapear();
  }, [round]);
  return (
    <>
      {showMessage ? (
        <main className={styles.backgroundRoundM}>
          <h2 className={styles.roundText}>Round {round}</h2>
        </main>
      ) : null}
    </>
  );
}

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

  // useEffect(() => {
  //   if (!auth) {
  //     navigate('/auth');
  //     console.log('User is not logged in.');
  //   } else {
  //     console.log('User is logged in.');
  //   }
  // }, [auth, navigate]);
  // if (!auth) return;

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
          <div className={styles.playerAvatar}>
            <img src='images/avatar.png' alt='Player Avatar' className={styles.playerAvatarImg} />
          </div>

          <div className={styles.playerInfo}>
            <div className={styles.playerName}></div>
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
