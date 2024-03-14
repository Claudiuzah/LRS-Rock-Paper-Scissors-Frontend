import "../App.css";
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
        <div className="background">
          <div className="logincontainertitle">
            <img src="./images/title.png" className="logintitleimage" alt="" />
            <img src="./video/crown.gif" className="logincrown" alt="" />
          </div>
  
          {/* <Loginbox/>  */}
  
          <div>
            <div className="loginbox">
              <div className="loginboxcontent">
                <div className="logincontenth2">
                  <h2>Sign up</h2>
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
                   <a>You have an account?</a> 
                   <Link to="/auth">
                   <a href="#" className="signuplinks2">Log in</a>
                   </Link>
                  </div>
  
                  <div class="logininputbox">
                    <input type="submit" value="Signup" className="buttonlogin" />
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
  