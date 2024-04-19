import { Link } from 'react-router-dom';
import { useState } from 'react';
import { API_SELF, LOGIN } from '../constants.js';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import styles from './index.module.css';

const signInUser = async (username, password) => {
  const response = await fetch(`${API_SELF}${LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=password&clientId=my-trusted-client&username=${username}&password=${password}&scope=user_info`,
  });

  return await response.json();
};

function Loginbox() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signIn = useSignIn();

  // const navigate = useNavigate();
  // const navigate = useNavigate();

  async function logging() {
    const data = await signInUser(username, password);
    console.log(data);
    signIn({
      auth: {
        token: data.access_token,
        type: data.token_type,
      },
    });
    console.log(data.access_token);
    // navigate('/menu');
    // if ( 1 == '2') {
    //   navigate('/auth');
    // }
  }

  return (
    <>
      <div>
        <div className={styles.loginbox}>
          <div className={styles.content}>
            <div className={styles.logincontenth2}>
              <h2>Log In</h2>
            </div>

            <div className={styles.loginform}>
              <div className={styles.logininputBox}>
                <input
                  type='text'
                  required
                  value={username}
                  className={styles.logininput}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <i className={styles.logini}>username</i>
              </div>

              <div className={styles.logininputBox}>
                <input
                  type='password'
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={styles.logininput}
                />
                <i className={styles.logini}>password</i>
              </div>

              <div className={styles.loginlinks}>
                <a>You dont have an account?</a>
                <Link to='/register' className={styles.loginlinks2}>
                  Signup
                </Link>
              </div>

              <div className={styles.logininputBox}>
                <input
                  type='submit'
                  value='Login'
                  onClick={logging}
                  className={styles.buttonlogin}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginbox;
