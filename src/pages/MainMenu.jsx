import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Text } from '@mantine/core';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect } from 'react';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

function MainMenu() {
  const [opened, { close, open }] = useDisclosure(false);
  const navigate = useNavigate();
  const auth = useAuthUser();
  console.log(auth);

  const signOut = useSignOut();

  useEffect(() => {
    if (!auth) {
      navigate('/auth');
      console.log('User is not logged in.');
    } else {
      console.log('User is logged in.');
    }
  }, [auth]);
  if (!auth) return;
  return (
    <main>
      <button
        type='submit'
        onClick={() => {
          signOut();
          navigate('/auth');
        }}
      >
        Sign Out
      </button>

      <Modal opened={opened} onClose={close} size='auto' centered>
        <Text>Are you sure you want to exit?</Text>

        <Group mt='xl'>
          <Link to='/menu'>
            <Button>Yes</Button>
          </Link>
          <Button onClick={close}>No</Button>
        </Group>
      </Modal>

      <div className='groupcontainer_menu'>
        <img src='./images/title.png' className='titleimagemenu' alt='' />
        <img src='./video/crown.gif' className='crownmenu' />

        <div className='buttonsboxmenu'>
          <div className='formmenu'>
            <Link to='/single'>
              <button className='buttonmenu'>
                <span>Singleplayer</span>
                <img src='video/player.gif' className='playergifmenu' />
              </button>
            </Link>
            <Link to='/lobby'>
              <button className='buttonmenu'>
                <span>Multiplayer</span>
                <img src='video/player.gif' className='multiplayergif1menu' />
                <img src='video/player.gif' className='multiplayergif2menu' />
                <img src='video/player.gif' className='multiplayergif3menu' />
              </button>
            </Link>
            <button onClick={open} className='buttonmenu'>
              <span>Settings</span>
              <img src='video/settings.gif' className='settingsgifmenu' />
            </button>
            <div size='auto' className='my-component'>
              <div className='player-avatar'>
                <img src='images/avatar.png' alt='Player Avatar' />
              </div>
              <div className='player-info'>
                <div className='player-name'>{auth.name}</div>
                <div className='player-stats'>
                  Total wins: 0<br />
                  Score: 0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainMenu;
