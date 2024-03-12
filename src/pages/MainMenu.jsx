import React from "react";
import { Link } from "react-router-dom"; //
import "../App.css";

function MainMenu() {
  return (
    <>
      <div className="background">
        <div>
          <img src="./images/title.png" className="titleimage" alt="" />
          <img src="./video/crown.gif" className="crown" />
          <div className="buttonsbox">
            <div className="form">
              <button className="button">
                <span>Singleplayer</span>
                <img src="public\video\player.gif" className="playergif" />
              </button>
              <button className="button">
                <span>Multiplayer</span>
                <img
                  src="public\video\player.gif"
                  className="multiplayergif1"
                />
                <img
                  src="public\video\player.gif"
                  className="multiplayergif2"
                />
                <img
                  src="public\video\player.gif"
                  className="multiplayergif3"
                />
              </button>
              <button className="button">
                <span>Settings</span>
                <img src="public\video\settings.gif" className="settingsgif" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
