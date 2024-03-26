import { Link } from 'react-router-dom';
import '../App.css';

function Signupbox() {
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
                <input type='text' required className='logininput' />
                <i className='logini'>username</i>
              </div>

              <div className='logininputbox'>
                <input type='password' required className='logininput' />
                <i className='logini'>password</i>
              </div>

              <div className='loginlinks'>
                <a>You have an account?</a>
                <Link to='/auth' className='signuplinks2'>
                  Log in
                </Link>
              </div>

              <div className='logininputbox'>
                <input type='submit' value='Signup' className='buttonlogin' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signupbox;
