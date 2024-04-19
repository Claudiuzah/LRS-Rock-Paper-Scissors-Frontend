import { useState, useEffect } from 'react';
import styles from './index.module.css';

function Audio() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById('audio_element');
    audioElement.loop = true;
  }, []);

  const playMusic = () => {
    const audioElement = document.getElementById('audio_element');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
    toggleButtonImage();
  };

  const toggleButtonImage = () => {
    const audioButton = document.querySelector('.audio_button');
    audioButton.style.backgroundImage = isPlaying
      ? 'url(/video/audio_off.gif)'
      : 'url(/video/audio_on.gif)';
  };

  return (
    <>
      <button className={styles.audioButton} onClick={playMusic}></button>
      <audio id='audio_element' src='audio/audio.mp3' />
    </>
  );
}

export default Audio;
