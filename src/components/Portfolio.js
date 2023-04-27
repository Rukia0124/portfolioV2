import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import Booki from "../assets/images/Projets/Booki.png";
import Grimoire from "../assets/images/Projets/Grimoire.png";
import Kasa from "../assets/images/Projets/Kasa.png";
import Nina from "../assets/images/Projets/NinaCarducci.png";
import Sophie from "../assets/images/Projets/Sophie.png";
import { NavLink } from "react-router-dom";

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 20px;
    height: 6px;
    background: pink;
  }
  > .slick-dots li.slick-active button {
    width: 20px;
    height: 7px;
    background: pink;
  }
`;

const Portfolio: React.FC = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div id="portfolio">
        <h2>Portfolio</h2>
        <p>Mes projets</p>
      </div>
      <CarouselWrapper autoplay>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Booki} alt="Screenshot de l'app Booki" />
          </div>
          <div className="slide-content">
            <h3>Booki</h3>
            <p>Création de la page d'accueil d'une agence de voyage</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Sophie} alt="Screenshot du site de Sophie Bluel" />
          </div>
          <div className="slide-content">
            <h3>Sophie Bluel</h3>
            <p>Création d'une page web dynamique en Javascript</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Nina} alt="Screenshot du site de Nina Carducci" />
          </div>
          <div className="slide-content">
            <h3>Nina Carducci</h3>
            <p>
              Deguggage et optimisation d'un site de photographe (accessibilité,
              SEO)
            </p>
            <button className="learn-more-button">
              <NavLink to="/Nina">En savoir plus</NavLink>
            </button>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-image">
            <img
              src={Kasa}
              alt="Screenshot du site de location immobilière Kasa"
            />
          </div>
          <div className="slide-content">
            <h3>Kasa</h3>
            <p>Création d'une application de location immobilière en React</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Grimoire} alt="Screenshot du site Mon vieux grimoire" />
          </div>
          <div className="slide-content">
            <h3>Mon vieux grimoire</h3>
            <p>Developpement du backend d'un site de notation de livres</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
      </CarouselWrapper>
    </div>
  );
};

export default Portfolio;
