import '../App.css';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { API_SELF, LOGIN } from './constants.js';

import useSignIn from 'react-auth-kit/hooks/useSignIn';

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
    // if (1 === '2') {
    //   navigate('/auth');
    // }
  }

  return (
    <>
      <div>
        <div className='loginbox'>
          <div className='loginboxcontent'>
            <div className='logincontenth2'>
              <h2>Log In</h2>
            </div>

            <div className='loginform'>
              <div className='logininputbox'>
                <input
                  type='text'
                  required
                  value={username}
                  className='logininput'
                  onChange={(event) => setUsername(event.target.value)}
                />
                <i className='logini'>username</i>
              </div>

              <div className='logininputbox'>
                <input
                  type='password'
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className='logininput'
                />
                <i className='logini'>password</i>
              </div>

              <div className='loginlinks'>
                <a>You dont have an account?</a>
                <Link to='/register' className='loginlinks2'>
                  Signup
                </Link>
              </div>

              <div className='logininputbox'>
                <input type='submit' value='Login' onClick={logging} className='buttonlogin' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginbox;
