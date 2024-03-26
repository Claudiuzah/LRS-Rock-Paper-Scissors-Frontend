import '../App.css';
import { Link } from 'react-router-dom';

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
function Register() {
  return (
    <>
      <div className='background'>
        <div className='groupcontainer'>
          <div className='logincontainertitle'>
            <img src='./images/title.png' className='titleimage' alt='' />
            <img src='./video/crown.gif' className='crown' alt='' />
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
        </div>
      </div>
    </>
  );
}

export default Register;
