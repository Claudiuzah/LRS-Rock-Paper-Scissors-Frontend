import "../App.css";
// import Loginbox from "./components/loginbox";

function Login() {
  return (
    <>
      <div className="background">
        <div className="containertitle">
          <img src="./images/title.png" className="titleimage" alt="" />
          <img src="./video/crown.gif" className="crown" alt="" />
        </div>

        {/* <Loginbox/> */}

        <div>
          <div className="loginbox">
            <div className="content">
              <div className="contenth2">
                <h2>Sign In</h2>
              </div>

              <div className="form">
                <div className="inputbox">
                  <input type="text" required className="input" />
                  <i className="i">username</i>
                </div>

                <div class="inputbox">
                  <input type="password" required className="input" />
                  <i className="i">password</i>
                </div>

                <div class="inputbox">
                  <input type="submit" value="Login" className="buttonlogin" />
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
