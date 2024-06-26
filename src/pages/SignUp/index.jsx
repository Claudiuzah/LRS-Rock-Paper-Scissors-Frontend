import Signupbox from '../../components/SignUpBox';
import styles from './index.module.css';

function Register() {
  return (
    <main className={styles.background}>
      <div className={styles.groupcontainer}>
        <img src='./images/title.png' className={styles.titleimage} alt='' />
        <img src='./video/crown.gif' className={styles.crown} alt='' />
        <Signupbox />
      </div>
    </main>
  );
}

export default Register;
