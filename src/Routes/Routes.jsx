import { createBrowserRouter } from "react-router-dom";
import HomeLayoute from "../Layoutes/HomeLayoute";
import Home from "../Pages/Home-Page/Home";
import Register from "../Shared-Component/Register/Register";
import Login from "../Shared-Component/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoute />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
