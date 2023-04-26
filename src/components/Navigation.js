import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink exact to="/" className="active theme-light">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/a-propos" className="active theme-light">
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/competences" className="active theme-light">
            Compétences
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="active theme-light">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="active theme-light">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active theme-light">
            Contact
          </NavLink>
        </li>
        <li>Darkmode</li>
      </ul>
    </div>
  );
};

export default Navigation;
