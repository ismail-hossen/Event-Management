import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../pages/error_page/NotFound";
import Home from "../pages/home/Home";
import AllEvents from "../pages/all_events/AllEvents";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Private from "./PrivateRoute";
import Public from "./PublicRoute";
import Blog from "../pages/blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-events",
        element: (
          <Private>
            <AllEvents />
          </Private>
        ),
      },
      {
        path: "/blog",
        element: (
          <Private>
            <Blog />
          </Private>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details />
          </Private>
        ),
      },
      {
        path: "/login",
        element: (
          <Public>
            <Login />
          </Public>
        ),
      },
      {
        path: "/register",
        element: (
          <Public>
            <Register />
          </Public>
        ),
      },
    ],
  },
]);
