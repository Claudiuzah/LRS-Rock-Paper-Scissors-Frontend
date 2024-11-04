import { useState } from 'react';
import Settings from './Settings';
import Audio from './Audio';

function App() {
  const [volumes, setVolume] = useState(50); // Initial volume

  // Update volume
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  return (
    <div>
      <Settings onVolumeChange={handleVolumeChange} />
      <Audio volumes={volumes} />
    </div>
  );
}

export default App;
