import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from "./Login";
import { Signup } from "./components/Signup";
import { Homepage } from "./components/Homepage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <Login />
  </React.StrictMode>
);

