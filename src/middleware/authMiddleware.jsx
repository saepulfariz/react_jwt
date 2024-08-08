import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const AuthMiddleware = ({ children, roles }) => {
  const token = localStorage.getItem("accessToken");
  const [userRole, setUserRole] = React.useState(null);

  React.useEffect(() => {
    if (token) {
      fetch(API_URL + "/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          mode: "cors",
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

      axios
        .get(API_URL + "/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            mode: "cors",
          },
        })
        .then((response) => {
          // Handle success
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    } else {
      setUserRole(null);
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (userRole && roles && !roles.includes(userRole)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AuthMiddleware;
