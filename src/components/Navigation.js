import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ navItems }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div id="side-bar">
      <div
        className={`toggle-btn ${menu ? "active" : ""}`}
        id="btn"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav ${menu ? "open" : "closed"}`} id="nav">
        {navItems.map((navItem, index) => (
          <li key={index}>
            {navItem.to ? (
              <NavLink to={navItem.to} className="active">
                {navItem.icon}
                {navItem.label}
              </NavLink>
            ) : (
              <a href={navItem.href} className="active">
                {navItem.icon}
                {navItem.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
