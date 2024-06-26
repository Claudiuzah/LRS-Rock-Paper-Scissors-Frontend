import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router.jsx';
import './App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <AuthProvider store={store}>
        <Router />
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>,
);
