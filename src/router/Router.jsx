import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../pages/error_page/NotFound";
import Home from "../pages/home/Home";
import AllEvents from "../pages/all_events/AllEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-events", element: <AllEvents /> },
    ],
  },
]);
