import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import Booki from "../assets/images/Projets/Booki.png";
import Grimoire from "../assets/images/Projets/Grimoire.png";
import Kasa from "../assets/images/Projets/Kasa.png";
import Nina from "../assets/images/Projets/NinaCarducci.png";

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
      <CarouselWrapper autoplay>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Booki} alt="Screenshot de l'app Booki" />
          </div>
          <div className="slide-content">
            <h3>Titre de la slide 1</h3>
            <p>Description de la slide 1</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Kasa} alt="Screenshot de l'app Kasa" />
          </div>
          <div className="slide-content">
            <h3>Titre de la slide 2</h3>
            <p>Description de la slide 2</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Grimoire} alt="Screenshot de l'app Mon vieux grimoire" />
          </div>
          <div className="slide-content">
            <h3>Titre de la slide 3</h3>
            <p>Description de la slide 3</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-image">
            <img src={Nina} alt="Screenshot du site de Nina Carducci" />
          </div>
          <div className="slide-content">
            <h3>Titre de la slide 4</h3>
            <p>Description de la slide 4</p>
            <button className="learn-more-button">En savoir plus</button>
          </div>
        </div>
      </CarouselWrapper>
    </div>
  );
};

export default Portfolio;
