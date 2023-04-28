import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ navItems }) => {
  return (
    <div>
      <ul className="nav" id="nav">
        <h3>Audrey</h3>
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
