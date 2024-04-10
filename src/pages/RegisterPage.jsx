import { SignUp } from "components/SignUp";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <SignUp/>
      <p>
        Already have an account?
        <br />
        <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
