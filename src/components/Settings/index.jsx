import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import styles from './index.module.css';

function Settings() {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentVolume, setCurrentVolume] = useState();
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
            onChange={(e) => setCurrentVolume(e.target.value)}
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
