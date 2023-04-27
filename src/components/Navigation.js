import { BulbOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="nav" id="nav">
        <li>
          <NavLink to="/" className="active theme-light">
            <HomeOutlined />
          </NavLink>
        </li>
        <li>
          <a href="#about" className="active theme-light">
            A propos
          </a>
        </li>
        <li>
          <a href="#competences" className="active theme-light">
            Compétences
          </a>
        </li>
        <li>
          <a href="#portfolio" className="active theme-light">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="active theme-light">
            Contact
          </a>
        </li>
        <li>
          <BulbOutlined />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
