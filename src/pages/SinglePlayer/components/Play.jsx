import React from "react";
import { useNavigate } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";

const Play = ({ setMyChoice }) => {
  const navigate = useNavigate();

  const setChoice = (e) => {
    const choice = e.target.dataset.id;
    setMyChoice(choice); // Update parent state
    navigate("/single/game", { state: { myChoice: choice } }); // Pass choice as state
  };

  return (
    <div className="play">
      <img src={Triangle} alt="Triangle background" className="triangle" />
      <div className="items">
        <div data-id="paper" onClick={setChoice} className="icon icon--paper"></div>
        <div data-id="scissors" onClick={setChoice} className="icon icon--scissors"></div>
        <div data-id="rock" onClick={setChoice} className="icon icon--rock"></div>
      </div>
    </div>
  );
};

export default Play;
