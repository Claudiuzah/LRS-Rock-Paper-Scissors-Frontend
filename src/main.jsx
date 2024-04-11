import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router.jsx';
import './index.css';
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
    <AuthProvider store={store}>
      <MantineProvider>
        <Router />
      </MantineProvider>
    </AuthProvider>
  </React.StrictMode>,
);
