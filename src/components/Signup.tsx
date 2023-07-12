import React from "react";
import ReactDOM from "react-dom/client";
import "./css/Signup.css";
import { useState } from "react";
import { validateEmail, validatePassword } from "../validation/UserValidation";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (checked: boolean) => {
    setShowPassword(checked);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let error = validateEmail(email);
    if (error) {
      alert(error);
      return;
    }
    error = validatePassword(password);
    if (error) {
      alert(error);
      return;
    }
    // TODO: Send email and password to server
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form"></div>
            <h2>Create Your Account</h2>
            <form className="register-form" id="register-form">
              {/* First Name */}
              <div className="form-group">
                <label htmlFor="first-name"></label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="off"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <label htmlFor="last-name"></label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="off"
                  placeholder="Last Name"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone"></label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="confirm-password"></label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </div>

              {/* Checkbox */}
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="checkbox"
                  onChange={() => handleChange(true)}
                />{" "}
                Show Password
              </div>
              {/* Submit */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Signup"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};