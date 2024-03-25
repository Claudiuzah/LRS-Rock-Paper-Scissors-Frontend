import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};

export const LoginProvider = ({ children }) => {
  const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'false';
  const [isLoggedIn, setLoggedIn] = useState(initialLoggedInState);

  const login = () => {
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>{children}</LoginContext.Provider>
  );
};
