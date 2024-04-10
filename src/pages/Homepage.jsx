import useAuth from "hooks/useAuth";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "store/slices/userSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <p>something for you</p>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Homepage;
