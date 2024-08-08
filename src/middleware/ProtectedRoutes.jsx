import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  // TODO: Use authentication token
  const localStorageToken = localStorage.getItem("accessToken");

  // return localStorageToken ? <Outlet /> : <Navigate to="/" replace />;

  if (!localStorageToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

// export default ProtectedRoutes;
