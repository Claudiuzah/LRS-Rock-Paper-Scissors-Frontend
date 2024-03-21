import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Startpage from "./pages/StartPage";
import Login from "./pages/LogIn";
import Mainmenu from "./pages/MainMenu";
import Register from "./pages/SignUp";
import Multiplayer from "./pages/lobby";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Startpage />,
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/menu",
    element: <Mainmenu />,
  },
  {
    path: "/lobby",
    element: <Multiplayer />,
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
