import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import "./sass/index.scss";
function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div data-theme={theme} className="app-container">
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
