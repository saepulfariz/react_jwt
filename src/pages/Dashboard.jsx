import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
