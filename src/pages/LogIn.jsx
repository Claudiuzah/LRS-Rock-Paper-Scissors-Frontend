import '../App.css';
import { Link } from 'react-router-dom';
// import Loginbox from "./components/loginbox";

// import React, { useState } from 'react';
// import { Container, TextInput, Button } from '@mantine/core';
// import { AUTHENTICATE, API_SELF } from '../constants/constants';
// import { useLogin } from './login-provider';

// Function to fetch data

function Login() {
  // const [username, setUsername] = useState('David');
  //   const [password, setPassword] = useState('password');
  //   const { isLoggedIn, login, logout } = useLogin();
  //   async function logging() {
  //       const data = await postUser(username, password);
  //       setUser(data.id);
  //       setusername(data.name);
  //       setTimeout(() => {
  //         hidelogin();
  //         login();
  //       }, 200);

  //   }

  return (
    <>
      <div className='groupcontainer'>
        <img src='./images/title.png' className='titleimage' alt='' />
        <img src='./video/crown.gif' className='crown' alt='' />

        {/* <Loginbox/>  */}

        <div>
          <div className='loginbox'>
            <div className='loginboxcontent'>
              <div className='logincontenth2'>
                <h2>Log In</h2>
              </div>

              <div className='loginform'>
                <div className='logininputbox'>
                  <input type='text' required className='logininput' />
                  <i className='logini'>username</i>
                </div>

                <div className='logininputbox'>
                  <input type='password' required className='logininput' />
                  <i className='logini'>password</i>
                </div>

                <div className='loginlinks'>
                  <a>You dont have an account?</a>
                  <Link to='/register' className='loginlinks2'>
                    Signup
                  </Link>
                </div>

                <div className='logininputbox'>
                  <input type='submit' value='Login' className='buttonlogin' />
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
