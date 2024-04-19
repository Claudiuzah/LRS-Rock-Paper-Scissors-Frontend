import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Text } from '@mantine/core';
import styles from './index.module.css';

const actions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

export function Bot() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

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
    <div className={styles.playerSingle}>
      <div className={styles.scoreSingle}>{`${name}: ${score}`}</div>
      <div className={styles.actionSingle}>
        {action && <Actionicon action={action} size={300} />}
      </div>
    </div>
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

function Singleplayer() {
  const [playerAction, setPlayerAction] = useState('');
  const [computerAction, setComputerAction] = useState('');

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = Bot();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);
    const newWinner = Calculatewinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 2);
      setComputerScore(computerScore - 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 2);
      setPlayerScore(playerScore - 1);
    }
  };

  const [opened, { close, open }] = useDisclosure(false);

  return (
    <html className={styles.backgroundSingle}>
      <>
        <Modal opened={opened} onClose={close} size='auto' centered>
          <Text>Are you sure you want to exit?</Text>

          <Group mt='xl'>
            <Link to='/menu'>
              <Button>Yes</Button>
            </Link>
            <Button onClick={close}>No</Button>
          </Group>
        </Modal>
      </>
      <div className={styles.centerSingle}>
        <h1>Rock Paper Scissors</h1>
        <div className={styles.left}>
          <button onClick={open} className={styles.exitButton}>
            <img src='video/exist.gif' className={styles.exitGif} />
          </button>
        </div>
        <div className={styles.containerSingle}>
          <Player name='Player' score={playerScore} action={playerAction} />
          <Player name='Computer' score={computerScore} action={computerAction} />
        </div>
        <div>
          <Actionbutton action='rock' onActionSelected={onActionSelected} />
          <Actionbutton action='paper' onActionSelected={onActionSelected} />
          <Actionbutton action='scissors' onActionSelected={onActionSelected} />
        </div>
        <Showwinner winner={winner} />
      </div>
    </html>
  );
}

export default Singleplayer;
