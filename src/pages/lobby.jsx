import "../App.css";

function Multiplayer() {
  return (
    <div className="background">
      <div className="my-component">
        <div className="player-avatar">
          <img src="public/images/avatar.png" alt="Player Avatar" />
        </div>
        <div className="player-info">
          <div className="player-name">Mr. Gabi </div>
          <div className="player-stats">
            Total wins: 0<br />
            Score: 0
          </div>
        </div>
      </div>
    </div>
  );
}

export default Multiplayer;
