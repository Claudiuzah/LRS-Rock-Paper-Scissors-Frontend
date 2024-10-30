import { useState, useEffect } from 'react';
import styles from './index.module.css';

function Audio({ volumes }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById('audio-element');
    audioElement.loop = true;

    const validVolume = isFinite(volumes) ? volumes / 100 : 0; // Verifică volumul
    audioElement.volumes = validVolume; // Setează volumul
    console.log('Current volume set to:', validVolume); // Log pentru a verifica volumul
  }, [volumes]);

  const playMusic = () => {
    const audioElement = document.getElementById('audio-element');
    console.log('Playing music:', isPlaying); // Adaugă log pentru a verifica starea
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play().catch((error) => {
        console.error('Error playing audio:', error); // Log pentru eroare
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main>
      <button
        className={`${styles.audioButton} ${isPlaying ? styles.playing : ''}`}
        onClick={playMusic}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio id='audio-element' src='/audio/audio.mp3' />
    </main>
  );
}

export default Audio;
