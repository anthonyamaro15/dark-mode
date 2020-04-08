import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
        <NavLink to="/">Us</NavLink>
        <NavLink to="/europe">Europe</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
