import React from "react";
import Feather from "../assets/images/Feather.png";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error404">
      <div id="container">
        <img src={Feather} alt="Dessin de plume" />
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
