import React, { useState} from "react";
import "../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false);
    return (
      <>
        <nav>
          <div className="main-nav">
            {/* Logo Part */}
            <div className="logo">
              <h1>Code Compass</h1>
            </div>
            {/* Menu Part */}
            <div className="menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/aboutUs">About Us</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/signup">SignUp</a>
                </li>
              </ul>
            </div>
          </div>
  
        </nav>
        {/* hero section */}
       
      </>
    );
};
