import { useState, useEffect } from 'react';
import styles from './index.module.css';

function Audio() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById('audio-element');
    audioElement.loop = true;
  }, []);

  const playMusic = () => {
    const audioElement = document.getElementById('audio-element');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button
        className={`${styles.audioButton} ${isPlaying ? styles.playing : ''}`}
        onClick={playMusic}
      ></button>
      <audio id='audio-element' src='/audio/audio.mp3' />
    </>
  );
}

export default Audio;
