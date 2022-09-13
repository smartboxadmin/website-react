import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
export default function Footer() {
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
          <h1>smartbox</h1>
          </div>
          <p>Making investment decisions easier.</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lower">
        <span>&copy; 2022 Smartbox</span>
      </div>
    </footer>
  );
}