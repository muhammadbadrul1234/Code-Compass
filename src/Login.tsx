import React from "react";
import ReactDOM from "react-dom/client";
import "./css/Login.css";
import { useState } from "react";

export const Login = () => {
  return (
    <>
      <section className="Login">
        <div className="container mt-5">
          <div className="Login-content">
            <div className="Login-form"></div>
            <h2>Login</h2>
            <form className="register-form" id="register-form">
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </div>

              {/* Checkbox */}
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="checkbox"
                />{" "}
                Show Password
              </div>
              {/* Submit */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="Login"
                  id="Login"
                  className="form-submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

