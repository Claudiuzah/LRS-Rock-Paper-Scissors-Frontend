// import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'src/components/LogoutButton/index.module.css';

const SignOutButton = ({ signOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/auth');
  };

  return (
    <button type="button" onClick={handleSignOut} className={styles.signOutButton}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
