import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import styles from './index.module.css';

function Settings({ onVolumeChange }) {
  // Adaugă prop onVolumeChange
  const [opened, { open, close }] = useDisclosure(false);
  const [currentVolume, setCurrentVolume] = useState(50); // Valoare inițială a volumului

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setCurrentVolume(volume);
    onVolumeChange(volume); // Apelează funcția pentru a actualiza volumul în Audio
  };

  return (
    <main>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered={true}
        lockScroll={false}
        title='Setări sunet'
      >
        <div>
          <h3>Volum</h3>
          <input
            type='range'
            min='0'
            max='100'
            value={currentVolume}
            onChange={handleVolumeChange} // Actualizează volumul
          />
        </div>
      </Modal>
      <button type='button' onClick={open} className={styles.buttonmenu}>
        <span>Settings</span>
        <img src='video/settings.gif' className={styles.settingsgifmenu} />
      </button>
    </main>
  );
}

export default Settings;
