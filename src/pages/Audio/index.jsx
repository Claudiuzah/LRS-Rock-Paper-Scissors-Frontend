import { useState } from 'react';
import styles from './index.module.css';

function Audio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playMusic = () => {
    const audioElement = document.getElementById('audio-element');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
    toggleButtonImage();
  };

  const toggleButtonImage = () => {
    const audioButton = document.querySelector('.audio-button');
    audioButton.style.backgroundImage = isPlaying
      ? 'url(/video/audio_off.gif)'
      : 'url(/video/audio_on.gif)';
  };
  return (
    <>
      <button className={styles.audioButton} onClick={playMusic}></button>
      <audio id='audio-element' src='/audio/audio.mp3' />
    </>
  );
}

export default Audio;
