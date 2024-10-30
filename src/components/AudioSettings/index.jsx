import { useState } from 'react';
import Audio from './Audio';
import Settings from './Settings';

const ParentComponent = () => {
  const [volume, setVolume] = useState(50); // Valoare inițială a volumului

  return (
    <div>
      <h1>Player Audio</h1>
      <Audio volume={volume} /> {/* Transmite volumul către componenta Audio */}
      <Settings onVolumeChange={setVolume} /> {/* Transmite funcția de schimbare a volumului */}
    </div>
  );
};

export default ParentComponent;
