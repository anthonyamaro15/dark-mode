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
      <div className="links">
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
        <div className="links-wrapper">
          <NavLink
            to="/"
            activeClassName="active"
            className={darkMode ? "light-mode" : "add-class"}
          >
            Us
          </NavLink>
          <NavLink to="/europe" activeClassName="active">
            Europe
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
