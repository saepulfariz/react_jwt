import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 1 * 1000);

  return <>Logout Page</>;
};

export default Logout;
