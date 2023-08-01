import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../assets/images/Rukia_Avatar.png";

const Error404 = () => {
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
