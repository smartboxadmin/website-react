import React, { useState } from "react";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
export default function Navbar({ changeTheme, currentTheme }) {
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <h1>smartbox</h1>
        </div>
        <div className="toggle-container">
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <a href="#signup">Sign Up</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}