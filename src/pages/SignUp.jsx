import '../App.css';
import Signupbox from '../components/signupbox';

function Register() {
  return (
    <>
      <div className='background'>
        <div className='groupcontainer'>
          <img src='./images/title.png' className='titleimage' alt='' />
          <img src='./video/crown.gif' className='crown' alt='' />
          <Signupbox />
        </div>
      </div>
    </>
  );
}

export default Register;
