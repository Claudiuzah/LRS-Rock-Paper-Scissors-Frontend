import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function MainMenu() {
  return (
    <>
      <div className="background">
        <img src="./images/title.png" className="titleimagemenu" />
        <img src="./video/crown.gif" className="crownmenu" />

        <div class="crownmenu"></div>
      </div>

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
            <img src="public\video\settings.gif" className="settingsgifmenu" />
          </button>
          <div className="my-component">
            <div className="player-avatar">
              <img src="public\images\avatar.png" alt="Player Avatar" />
            </div>
            <div className="player-info">
              <div className="player-name">Player Name</div>
              <div className="player-stats">
                Total wins: 0<br />
                Score: 0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;

{
  /* <div className="my-component">
  <div className="player-avatar">
    <img src="avatar.jpg" alt="Player Avatar" />
  </div>
  <div className="player-info">
    <div className="player-name">Player Name</div>
    <div className="player-stats">
      Total wins: 0<br />
      Score: 0
    </div>
  </div>
</div>; */
}
