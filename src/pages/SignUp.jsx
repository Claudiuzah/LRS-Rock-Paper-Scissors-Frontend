// import "../App.css";
// import { Link } from 'react-router-dom';

// cy.request('/api/auth/csrf').then(({ body: { csrfToken } }) => {
//     cy.request({
//       method: 'POST',
//       url: '/api/auth/callback/credentials',
//       form: true,
//       body: {
//         username,
//         password,
//         csrfToken
//       }
//     }).then(() => {
//       cy.getCookie('next-auth.session-token').should('exist')
//     })
// })
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AUTHENTICATE, API_SELF, CHECK_USERNAME } from './constants';
import { Navigate } from 'react-router-dom';

async function postUser(username, password) {
  const body = {
    username: username,
    password: password,
  };
  const response = await fetch(`${API_SELF}${AUTHENTICATE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

// Function to fetch data

export function Register({ hidelogin, setUser, setusername }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useLogin(); // NOT WORKING PROPERLY

  ///////////////////////////////////////////////////////////
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setErrorMessage(''); // Clear any previous error message
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_SELF}${CHECK_USERNAME}?username=${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const { username_taken } = data;
      if (username_taken) {
        setErrorMessage('Username is already used!');
      } else {
        // Proceed with sign-up process
        const data = await postUser(username, password);
        setUser(data.id);
        setusername(data.name);
        setTimeout(() => {
          hidelogin();
          login();
        }, 200);
      }
    } catch (error) {
      console.error('Error checking username:', error);
      setErrorMessage(
        'An error occurred while checking the username. Please try again later or refresh the page.',
      );
    }
  };
  useEffect(() => {}, []);
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
                <h2>Sign up</h2>
              </div>

              <div className='loginform'>
                <div className='logininputbox'>
                  <input
                    type='text'
                    required
                    className='logininput'
                    value={username}
                    onChange={handleInputChange}
                  />
                  <i className='logini'>username</i>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
                  <a>You have an account?</a>
                  <Link to='/auth'>
                    <a href='#' className='signuplinks2'>
                      Log in
                    </a>
                  </Link>
                </div>

                <div class='logininputbox'>
                  <input
                    type='submit'
                    value='Signup'
                    className='buttonlogin'
                    onClick={handleSignUp}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
