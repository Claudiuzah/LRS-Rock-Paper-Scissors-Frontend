import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function MainMenu() {
  return (
    <>
      <div className="background">
        <div>
          <img src="./images/title.png" className="titleimagemenu" alt="" />
          <img src="./video/crown.gif" className="crownmenu" />
          <div className="buttonsboxmenu">
            <div className="formmenu">
              <button className="buttonmenu">
                <span>Singleplayer</span>
                <img src="public\video\player.gif" className="playergifmenu" />
              </button>
              <button className="buttonmenu">
                <span>Multiplayer</span>
                <img
                  src="public\video\player.gif"
                  className="multiplayergif1menu"
                />
                <img
                  src="public\video\player.gif"
                  className="multiplayergif2menu"
                />
                <img
                  src="public\video\player.gif"
                  className="multiplayergif3menu"
                />
              </button>
              <button className="buttonmenu">
                <span>Settings</span>
                <img
                  src="public\video\settings.gif"
                  className="settingsgifmenu"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
