import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Play from "./components/Play.jsx";
import Game from "./components/Game.jsx";
import './styles.scss';

function Singleplayer() {
  const [myChoice, setMyChoice] = useState(""); // Track player's choice
  const [score, setScore] = useState(0);        // Track player's score

  return (
    <div className="container">
      <Header score={score} />
      <Routes>
        {/* Pass setMyChoice to Play */}
        <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
        {/* Pass myChoice, score, and setScore to Game */}
        <Route
          path="/game"
          element={<Game myChoice={myChoice} score={score} setScore={setScore} />}
        />
      </Routes>
    </div>
  );
}

export default Singleplayer;
