import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from 'src/pages/StartPage';
import Login from 'src/pages/LogIn';
import MainMenu from 'src/pages/MainMenu';
import Register from 'src/pages/SignUp';
import SinglePlayer from 'src/pages/SinglePlayer';
import LobbyRoom from 'src/pages/Lobby';
import Audio from 'src/components/Audio';
// import MultiPlayer from 'src/pages/MultiPlayer';
import LeaderBoard from 'src/pages/leaderboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
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
    element: <MainMenu />,
  },
  {
    path: '/lobby',
    element: <LobbyRoom />,
  },
  {
    path: '/single',
    element: <SinglePlayer />,
  },
  // {
  //   path: '/multiplayer',
  //   element: <MultiPlayer />,
  // },
  {
    path: '/lboard',
    element: <LeaderBoard />,
  },
]);

function Router() {
  return (
    <main>
      <RouterProvider router={router} />
      <Audio />
    </main>
  );
}

export default Router;
