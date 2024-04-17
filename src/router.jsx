import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Startpage from './pages/StartPage';
import Login from './pages/LogIn';
import Mainmenu from './pages/MainMenu';
import Register from './pages/SignUp';
import SinglePlayer from './pages/SinglePlayer';
import LobbyRoom from './pages/lobby';
// import AuthProvider from 'react-auth-kit/AuthProvider';
// import createStore from 'react-auth-kit/createStore';
import MultiPlayer from './pages/MultiPlayer.jsx';
import Audio from './pages/Audio.jsx';

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
    element: <LobbyRoom />,
  },
  {
    path: '/single',
    element: <SinglePlayer />,
  },
  {
    path: '/multiplayer',
    element: <MultiPlayer />,
  },
]);

function Router() {
  return (
    <def>
      <RouterProvider router={router} />
      <Audio />
    </def>
  );
}

export default Router;
