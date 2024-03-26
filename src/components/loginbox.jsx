import '../App.css';
import { Link } from 'react-router-dom';

function Loginbox() {
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
    </>
  );
}

export default Loginbox;
