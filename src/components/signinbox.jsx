import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';
import { AUTHENTICATE, API_SELF } from './constants';

async function postUser(username, password) {
  const body = {
    username,
    password,
  };
  const response = await fetch(`${API_SELF}${AUTHENTICATE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

function Signupbox() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setErrorMessage('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    const data = await postUser(username, password);
    setUsername(data.id);
    setUsername(data.name);
    setTimeout(() => {}, 200);

    navigate('/auth');
  };
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <>
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
                  value={username}
                  onChange={handleInputChange}
                  className='logininput'
                />
                <i className='logini'>username</i>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
                <a>You have an account?</a>
                <Link to='/auth' className='signuplinks2'>
                  Log in
                </Link>
              </div>

              <div className='logininputbox'>
                <input
                  type='submit'
                  value='Signup'
                  onClick={handleSignUp}
                  className='buttonlogin'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signupbox;
