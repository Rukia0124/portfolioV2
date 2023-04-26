import React from "react";
import Socials from "./Socials";
import Avatar from "../assets/images/rukia_v2_minia.png";

const Introduction = () => {
  return (
    <div>
      <Socials />
      <h1>Hello world ! </h1>
      <h2>Audrey, développeuse web junior</h2>
      <p>
        En formation avec OpenClassrooms, passionnée par l'apprentissage continu
        et l'amélioration constante de mes compétences.{" "}
      </p>
      <button>
        Contactez-moi <i className="fa-solid fa-chevron-right"></i>
      </button>
      <img src={Avatar} alt="Avatar de Audrey" width={200} />
    </div>
  );
};

export default Introduction;
