import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Text } from '@mantine/core';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect } from 'react';

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
  return <img src='./images/scissors.png' className='scissors' />;
}
export function Rock() {
  return <img src='./images/rock.png' className='scissors' />;
}
export function Paper() {
  return <img src='./images/paper.png' className='scissors' />;
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
    <div className='playersingle'>
      <div className='scoresingle'>{`${name}: ${score}`}</div>
      <div className='actionsingle'>{action && <Actionicon action={action} size={300} />}</div>
    </div>
  );
}

export function Actionbutton({ action = 'rock', onActionSelected }) {
  return (
    <button className='round-btn' onClick={() => onActionSelected(action)}>
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

  const navigate = useNavigate();
  const auth = useAuthUser();
  console.log(auth);

  useEffect(() => {
    if (!auth) {
      navigate('/auth');
      console.log('User is not logged in.');
    } else {
      console.log('User is logged in.');
    }
  }, [auth]);

  return (
    <main className='backgroundsingle'>
      <>
        <Modal
          opened={opened}
          onClose={close}
          size='auto'
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
          styles={{
            content: { backgroundColor: 'gray' },
            header: { backgroundColor: 'gray' },
          }}
          className='mantine-Modal-content'
          centered
        >
          <Text color='white' size='xl'>
            Are you sure you want to exit?
          </Text>

          <Group mt='xl'>
            <Link to='/menu'>
              <Button color='orange'>Yes</Button>
            </Link>
            <Button color='orange' onClick={close}>
              No
            </Button>
          </Group>
        </Modal>
      </>
      <div className='centersingle'>
        <h1>Rock Paper Scissors</h1>
        <div className='left'>
          <button onClick={open} className='exitbutton'>
            <img src='video/exist.gif' className='exitgif' />
          </button>
        </div>
        <div className='containersingle'>
          <Player name={auth.name} score={playerScore} action={playerAction} />
          <Player name='Bot' score={computerScore} action={computerAction} />
        </div>
        <div>
          <Actionbutton action='rock' onActionSelected={onActionSelected} />
          <Actionbutton action='paper' onActionSelected={onActionSelected} />
          <Actionbutton action='scissors' onActionSelected={onActionSelected} />
        </div>
        <Showwinner winner={winner} />
      </div>
    </main>
  );
}

export default Singleplayer;
