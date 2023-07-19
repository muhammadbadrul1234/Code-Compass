import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/SignUp";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./components/AboutUs";
import { Homepage } from "./components/Homepage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
