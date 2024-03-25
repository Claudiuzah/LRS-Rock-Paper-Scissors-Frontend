import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { Container, TextInput, Button } from '@mantine/core';
import { AUTHENTICATE, API_SELF } from './constants';
// import { useLogin } from './login-provider';

async function postUser(username, password) {
  const body = {
    username: username,
    password: password,
  };
  const response = await window.fetch(`${API_SELF}${AUTHENTICATE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
// Function to fetch data

export function Login({ hidelogin, setUser, setusername }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { isLoggedIn, login, logout } = useLogin(); // NOT WORKING PROPERLY
  async function logging() {
    const data = await postUser(username, password);
    setUser(data.id);
    setusername(data.name);
    setTimeout(() => {
      hidelogin();
      login();
    }, 200);
  }

  return (
    <>
      <div className='background'>
        <div className='logincontainertitle'>
          <img src='./images/title.png' className='logintitleimage' alt='' />
          <img src='./video/crown.gif' className='logincrown' alt='' />
        </div>

        {/* <Loginbox/>  */}

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
                    className='logininput'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <i className='logini'>username</i>
                </div>

                <div class='logininputbox'>
                  <input
                    type='password'
                    required
                    className='logininput'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <i className='logini'>password</i>
                </div>

                <div class='loginlinks'>
                  <a>You dont have an account?</a>
                  <Link to='/register'>
                    <a href='#' className='loginlinks2'>
                      Signup
                    </a>
                  </Link>
                </div>

                <div class='logininputbox'>
                  <input type='submit' value='Login' className='buttonlogin' onClick={logging} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
