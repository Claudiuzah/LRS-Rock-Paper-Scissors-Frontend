import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

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
export function Actionicon({ action, ...props }) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
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
  return (
    <html className='background'>
      <div className='centersingle'>
        <h1>Rock Paper Scissors</h1>
        <div className='left'>
          <Link to='/menu'>
            <button className='exitbutton'>
              <img src='video/exist.gif' className='exitgif' />
            </button>
          </Link>
        </div>
        <div className='containersingle'>
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
