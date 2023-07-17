import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
    </>
  );
};
