import "../App.css";
import { Link } from 'react-router-dom';

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
      <div className="background">
        <div className="groupcontainer">
        <div className="logincontainertitle">
          <img src="./images/title.png" className="titleimagestart" alt="" />
          <img src="./video/crown.gif" className="crownstart" alt="" />
        </div>

        {/* <Loginbox/>  */}

        <div>
          <div className="loginbox">
            <div className="loginboxcontent">
              <div className="logincontenth2">
                <h2>Log In</h2>
              </div>

              <div className="loginform">
                <div className="logininputbox">
                  <input type="text" required className="logininput" />
                  <i className="logini">username</i>
                </div>

                <div class="logininputbox">
                  <input type="password" required className="logininput" />
                  <i className="logini">password</i>
                </div>

                <div class="loginlinks">
                 <a>You dont have an account?</a> 
                 <Link to="/register">
                 <a href="#" className="loginlinks2">Signup</a>
                 </Link>
                </div>

                <div class="logininputbox">
                  <input type="submit" value="Login" className="buttonlogin" />
                </div>
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
