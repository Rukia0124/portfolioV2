import React from "react";
import Feather from "../assets/images/Feather.png";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div id="container">
        <img src={Feather} alt="Dessin de plume" />
        <div className="text" id="index">
          <h1>Audrey</h1>
          <p>
            Poussière de <NavLink to="/Home">dev</NavLink> en quête
            d'amélioration et de découverte de ma voie dans le{" "}
            <NavLink>développement</NavLink>.
          </p>
          <p>
            J'ai une passion pour la création de{" "}
            <NavLink>sites web et d'applications</NavLink> et j'aime apprendre
            de nouvelles compétences pour enrichir mon
            <NavLink> expérience</NavLink>.
          </p>
          <p>
            Si vous voulez discuter de <NavLink>projets</NavLink> ou simplement
            échanger des idées, n'hésitez pas à me{" "}
            <NavLink to="/contact">contacter</NavLink> !
          </p>
          <p id="more">
            <NavLink to="/home">
              <i className="fa-solid fa-chevron-right"></i>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
