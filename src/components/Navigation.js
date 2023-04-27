import { BulbOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink to="/" className="active theme-light">
            <HomeOutlined />
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
          <NavLink to="/portfolio" className="active theme-light">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active theme-light">
            Contact
          </NavLink>
        </li>
        <li>
          <BulbOutlined />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
