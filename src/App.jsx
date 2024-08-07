import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AuthMiddleware from "./middleware/authMiddleware";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={
            <AuthMiddleware roles={["admininistrator"]}>
              <Dashboard />
            </AuthMiddleware>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
