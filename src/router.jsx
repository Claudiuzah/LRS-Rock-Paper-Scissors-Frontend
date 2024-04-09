import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Startpage from './pages/StartPage';
import Login from './pages/LogIn';
import Mainmenu from './pages/MainMenu';
import Register from './pages/SignUp';
import SinglePlayer from './pages/SinglePlayer';
import Multiplayer from './pages/lobby';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Startpage />,
  },
  {
    path: '/auth',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/menu',
    element: <Mainmenu />,
  },
  {
    path: '/lobby',
    element: <Multiplayer />,
  },
  {
    path: '/single',
    element: <SinglePlayer />,
  },
]);

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

function Router() {
  return (
    <>
      <AuthProvider store={store}>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default Router;
