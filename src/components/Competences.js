import React from "react";
import Back from "../assets/images/back.png";
import Front from "../assets/images/front.png";
import Other from "../assets/images/other.webp";
const Competences = () => {
  return (
    <div id="competences">
      <h2>Compétences</h2>
      <div className="cards-container">
        <div className="card1">
          <div className="card">
            <h3>Front-end</h3>
            <p>
              Création et intégration de sites web et applications mobiles
              responsive, accessibles et répondant aux normes W3C.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className="img-container right-img">
            <img src={Front} alt="Frontend 3D icon" className="card-img1 " />
          </div>
        </div>
        <div className="card2">
          <div className="img-container">
            <img src={Back} alt="Backend 3D icon" className="card-img2" />
          </div>
          <div className="card">
            <h3>Back-end</h3>
            <p>
              Développement de sites web et applications, création et gestion de
              bases de données, programmation orientée objet, mise en ligne.
            </p>
            <ul>
              <li>NodeJS</li>
              <li>Notions de PHP</li>
              <li>Postman</li>
              <li>MongoDB</li>
              <li>Notions de SQL</li>
              <li>Notions debian/Linux + Nginx</li>
            </ul>
          </div>
        </div>
        <div className="card3">
          <div className="card">
            <h3>Autres</h3>
            <p>
              Compétences complémentaires pouvant être utiles pour mes projets
              numériques.
            </p>
            <ul>
              <li>SEO</li>
              <li>Accessibilité</li>
              <li>Figma</li>
              <li>Office</li>
              <li>Google Workspace</li>
              <li>Anglais courant</li>
            </ul>
          </div>
          <div className="img-container right-img">
            <img src={Other} alt=" 3D icon" className="card-img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
