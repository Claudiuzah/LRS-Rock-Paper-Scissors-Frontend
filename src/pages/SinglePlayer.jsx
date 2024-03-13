import React, { useState } from 'react';
import "../App.css";

function Singleplayer() {
  const [image, setImage] = useState(null);

  const displayRandomImage = () => {
    const images = ["./images/rock.png", "./images/scissors.png", "./images/paper.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setImage(randomImage);
  };

  return (
    <>
      <div className="background">
        <div>
          <button onClick={displayRandomImage}>Afișează imagine</button>
        </div>
        {image && <img src={`images/${image}`} alt="Random Image" />}
      </div>
    </>
  );
}

export default Singleplayer;
