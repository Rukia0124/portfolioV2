import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DataService from "../data/Service";
import WaveLight from "../assets/images/wave2.png";
import WaveDark from "../assets/images/wave4.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 20px;
    height: 6px;
    background: #efb9e3;
  }
  > .slick-dots li.slick-active button {
    width: 20px;
    height: 7px;
    background: #aeecc4;
  }
`;

const Portfolio: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const WaveImg = theme === "light" ? WaveLight : WaveDark;
  const data = DataService.getAllData();
  return (
    <div className="portfolio">
      <div className="carousel" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div id="portfolio">
          <h2>Portfolio</h2>
        </div>
        <CarouselWrapper autoplay effect="fade" autoplaySpeed={4000}>
          {data.map((data, index) => (
            <div className="carousel-slide" key={index}>
              <div className="slide-image">
                <img src={data.imageUrl} alt="Screenshot de l'app Booki" />
              </div>
              <div className="slide-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <button className="learn-more-button">
                  <NavLink to={"/projets/" + data.id} target="_blank">
                    En savoir plus
                  </NavLink>
                </button>
              </div>
            </div>
          ))}
        </CarouselWrapper>
      </div>
      <img
        src={WaveImg}
        alt="Seconde vague de séparation"
        className="separation"
      />
    </div>
  );
};

export default Portfolio;
