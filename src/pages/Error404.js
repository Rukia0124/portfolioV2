import React from "react";
import { NavLink } from "react-router-dom";
import AvatarLight from "../assets/images/AvatarLight.png";
import AvatarDark from "../assets/images/AvatarDark.png";
import { useContext } from "react";
import { ThemeContext } from "../App";
const Error404 = () => {
  const { theme } = useContext(ThemeContext);
  const Avatar = theme === "light" ? AvatarLight : AvatarDark;
  return (
    <div className="error404">
      <div id="container">
        <img src={Avatar} alt="Avatar de Audrey" />
        <div className="text" id="index">
          <h1>Erreur 404</h1>
          <p>Oups, cette page n'existe pas !</p>
          <p className="link">
            <NavLink to="/">
              Retourner à l'accueil{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
