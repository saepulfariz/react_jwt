import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:8080/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // });
    // const data = await response.json();
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, password }),
    // };
    // fetch("http://localhost:8080/api/login", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    // if (data.token) {
    //   localStorage.setItem("token", data.token);
    //   navigate("/dashboard");
    // } else {
    //   alert("Login failed");
    // }
    // const login = { username, password };
    // axios.post("http://localhost:8080/api/login", login).then((response) => {
    //   console.log(response);
    // });

    // Make a request for a user with a given ID
    axios
      .get(
        "http://localhost:8080/api/login?username=" +
          username +
          "&password=" +
          password
      )
      .then(function (response) {
        // handle success
        var data = response.data;

        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        navigate("/dashboard");
      })
      .catch(function () {
        // handle error
        // console.log(error);
        alert("Login failed");
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
