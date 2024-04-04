import '../App.css';
import Loginbox from '../components/loginbox';

function Login() {
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
