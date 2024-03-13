import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Startpage from "./pages/StartPage";
import Login from "./pages/LogIn";
import Mainmenu from "./pages/MainMenu";
import Singleplayer from "./pages/SinglePlayer.jsx"


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Startpage />,
  },
  {
    path: "/authenticate",
    element: <Login />,
  },
  {
    path: "/menu",
    element: <Mainmenu />,
  },
  {
     path: "/SinglePlayer",
     element: <Singleplayer/>,

  },

]);

function Router() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default Router;
