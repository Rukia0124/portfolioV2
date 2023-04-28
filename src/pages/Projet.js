import React from "react";
import { Navigate, useParams } from "react-router-dom";
import DataService from "../data/Service";
import { Button } from "antd";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { HomeOutlined } from "@ant-design/icons";

const Projet = () => {
  const { id } = useParams();
  const projet = DataService.getDataById(id);

  if (!projet) {
    return <Navigate to="*" />;
  }

  const images = Array.isArray(projet.imageUrl)
    ? projet.imageUrl
    : [projet.imageUrl];

  const navItems = [{ to: "/home", icon: <HomeOutlined /> }];

  return (
    <div>
      <Navigation navItems={navItems} />
      <div id="projet">
        <h2>{projet.title}</h2>
        <div className="projet-desc">
          <div className="projet-image">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={"Screenshot de l'app " + projet.title}
              />
            ))}
          </div>
          <div>{projet.description}</div>
          <div className="tags">
            {projet.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <div>{projet.infos}</div>
          <Button type="primary">
            <a href={projet.link}>Voir le site</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projet;
