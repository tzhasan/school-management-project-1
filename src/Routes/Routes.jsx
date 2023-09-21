import { createBrowserRouter } from "react-router-dom";
import HomeLayoute from "../Layoutes/HomeLayoute";
import Home from "../Pages/Home-Page/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoute />,
    children: [
      {

        path: '/',
        element:<Home/>
      },

    ]
  },
])

export default router;