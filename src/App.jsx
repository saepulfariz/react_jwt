import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// import { ProtectedRoutes } from "./middleware/ProtectedRoutes";
import AuthMiddleware from "./middleware/authMiddleware";

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
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/dashboard",
    element: (
      // <AuthMiddleware roles={["administrator"]}>
      <AuthMiddleware>
        <Dashboard />
      </AuthMiddleware>
    ),
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
