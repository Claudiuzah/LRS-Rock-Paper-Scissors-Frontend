import styles from './index.module.css';
import LoginBox from '../../components/LoginBox';
function Login() {
  return (
    <main className={styles.groupContainer}>
      <img src='./images/title.png' className={styles.titleImage} alt='' />
      <img src='./video/crown.gif' className={styles.crown} alt='' />
      <LoginBox />
    </main>
  );
}

export default Login;
