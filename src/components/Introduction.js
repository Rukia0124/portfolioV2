import React from "react";
import Socials from "./Socials";
import WaveLight from "../assets/images/wave1.png";
import WaveDark from "../assets/images/wave3.png";
import AvatarLight from "../assets/images/AvatarLight.png";
import AvatarDark from "../assets/images/AvatarDark.png";
import { Button } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Introduction = () => {
  const { theme } = useContext(ThemeContext);
  const WaveImg = theme === "light" ? WaveLight : WaveDark;
  const Avatar = theme === "light" ? AvatarLight : AvatarDark;
  return (
    <div id="introduction">
      <Socials />
      <div className="intro-content">
        <h1>Hello world ! </h1>
        <h2>Moi c'est Audrey.</h2>
        <p>
          Actuellement en formation de développeuse web avec OpenClassrooms,
          j'aime l'apprentissage continu et l'amélioration constante de mes
          compétences. J'ai une passion pour la création de sites web et
          d'applications et j'aime apprendre de nouvelles compétences pour
          enrichir mon expérience. Si vous voulez discuter de projets ou
          simplement échanger, n'hésitez pas à me contacter!
        </p>
        <Button type="primary" ghost="true">
          <a href="#contact">Contactez-moi</a>
        </Button>
      </div>
      <img src={Avatar} alt="Avatar de Audrey" width={200} />
      <img src={WaveImg} alt="Séparation de sections" className="separation" />
    </div>
  );
};

export default Introduction;
