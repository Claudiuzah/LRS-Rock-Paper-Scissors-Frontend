import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const Game = ({ myChoice, score, setScore }) => {
  
  console.log("Props in Game:", { myChoice, score, setScore });
  const { state } = useLocation(); // Retrieve state from the navigation
  const myChoiceFromState = state?.myChoice || ""; // Get the player's choice from state

  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);
  // var [score, SetScore] = useState()

  // Log player's choice when it's available
  useEffect(() => {
    console.log("Player's Choice in Game component:", myChoiceFromState); // Log the player's choice
  }, [myChoiceFromState]);

  // Generate computer's choice after countdown finishes
  useEffect(() => {
    if (counter === 0) {
      const choices = ["rock", "paper", "scissors"];
      const newHouse = choices[Math.floor(Math.random() * 3)];
      setHouse(newHouse); // Generate computer's choice
      console.log("House's Choice:", newHouse); // Log computer's choice
    }
  }, [counter]);

  useEffect(() => {
    if (house !== "") {  // Ensure house/bot is set before determining the result
      console.log("myChoice:", myChoiceFromState, "house:", house);  // Log both values to check if they are correct

      let result = "";
      if (myChoiceFromState === "rock" && house === "scissors") {
        result = "win";
        setScore(prevScore => prevScore + 1); // Update score
      } else if (myChoiceFromState === "rock" && house === "paper") {
        result = "lose";
        setScore(prevScore => prevScore - 1); // Update score
      } else if (myChoiceFromState === "scissors" && house === "paper") {
        result = "win";
        setScore(prevScore => prevScore + 1); // Update score
      } else if (myChoiceFromState === "scissors" && house === "rock") {
        result = "lose";
        setScore(prevScore => prevScore - 1); // Update score
      } else if (myChoiceFromState === "paper" && house === "rock") {
        result = "win";
        setScore(prevScore => prevScore + 1); // Update score
      } else if (myChoiceFromState === "paper" && house === "scissors") {
        result = "lose";
        setScore(prevScore => prevScore - 1); // Update score
      } else {
        result = "draw";
      }

      console.log("Result:", result); // Log the result
      setPlayerWin(result);
    }
  }, [house, myChoiceFromState, setScore]);  // This effect runs only when house or myChoice changes

  // Countdown timer logic
  useEffect(() => {
    const timer = counter > 0
      ? setInterval(() => {
          setCounter(prevCounter => prevCounter - 1);
        }, 1000)
      : null;

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoiceFromState} ${
            playerWin === "win" ? `icon icon--${myChoiceFromState}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/single" className="play-again">Play Again</Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/single" className="play-again">Play Again</Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/single" className="play-again">Play Again</Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">The Computer Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin === "lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
