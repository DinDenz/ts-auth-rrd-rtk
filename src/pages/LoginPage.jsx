import { Login } from "components/Login";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
      <p>
        Or
        <br />
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
