import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { ProtectedRoutes } from "./middleware/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  // {
  //   element: <ProtectedRoutes />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //   ],
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
