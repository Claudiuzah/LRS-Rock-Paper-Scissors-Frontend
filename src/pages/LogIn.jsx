import '../App.css';
// import { Link } from 'react-router-dom';
import Loginbox from '../components/loginbox';

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
        <Loginbox />
      </div>
    </>
  );
}

export default Login;
