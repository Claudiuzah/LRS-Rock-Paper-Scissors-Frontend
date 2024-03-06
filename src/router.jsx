import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Startpage from "./pages/StartPage";
import Login from "./pages/LogIn";
import Mainmenu from "./pages/MainMenu";


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

]);

function Router() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default Router;
