import styles from './index.module.css';
import LoginBox from '../../components/LoginBox';
function Login() {
  return (
    <>
      <div className={styles.groupcontainer}>
        <img src='./images/title.png' className={styles.titleimage} alt='' />
        <img src='./video/crown.gif' className={styles.crown} alt='' />
        <LoginBox />
      </div>
    </>
  );
}

export default Login;
