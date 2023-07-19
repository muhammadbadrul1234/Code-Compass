import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
    </>
  );
};

