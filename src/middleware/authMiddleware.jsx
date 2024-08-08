import React from "react";
import { Navigate, useNavigate, redirect } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const AuthMiddleware = ({ children, roles }) => {
  const token = localStorage.getItem("accessToken");
  const [userRole, setUserRole] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token) {
      fetch(API_URL + "/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserRole(data.role);
        })
        .catch((error) => {
          console.error("Error fetching user role:", error);
          setUserRole(null);
        });
    } else {
      setUserRole(null);
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/" />;
  }

  if (userRole && roles && !roles.includes(userRole)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AuthMiddleware;
