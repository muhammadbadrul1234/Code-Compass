import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from "./components/Login";
import { Signup } from "./components/SignUp";
import { Navbar } from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
