import styles from './index.module.css';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

function Profile() {
  const auth = useAuthUser();
  console.log(auth);

  return (
    <div className={styles.myComponent}>
      <div className={styles.playerAvatar}>
        <img src='images/avatar.png' alt='Player Avatar' className={styles.playerAvatarImg} />
      </div>
      <div className={styles.playerInfo}>
        <div className={styles.playerName}>{auth.name}</div>
        <div className={styles.playerStats}>
          Total wins: 0<br />
          Score: 0
        </div>
      </div>
    </div>
  );
}

export default Profile;
