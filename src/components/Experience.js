import { CalendarOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

import React, { useState } from "react";

const Experience = () => {
  const [career, setCareer] = useState(false);
  const [studies, setStudies] = useState(true);

  const toggleStudies = () => {
    setCareer(false);
    setStudies(true);
  };
  const toggleCareer = () => {
    setCareer(true);
    setStudies(false);
  };

  return (
    <div id="experience">
      <h2>Expériences</h2>
      <p>Mon parcours</p>
      <div className="btn-xp">
        <div
          className={`btn btn-studies ${studies ? "active-btn" : ""}`}
          onClick={toggleStudies}
        >
          <span>
            <i className="fa-solid fa-graduation-cap"> </i>Formation
          </span>
        </div>
        <div
          className={`btn btn-career ${career ? "active-btn" : ""}`}
          onClick={toggleCareer}
        >
          <span>
            <i className="fa-solid fa-suitcase"></i>
            Emploi
          </span>
        </div>
      </div>
      {studies && !career ? (
        <Timeline
          mode="alternate"
          items={[
            {
              color: "pink",
              children: (
                <>
                  <h3>Développeuse Web</h3>
                  <p>OpenClassrooms</p>
                  <p>
                    <CalendarOutlined /> 2022 - 2023
                  </p>
                </>
              ),
            },
            {
              color: "pink",
              children: (
                <>
                  <h3>Apprentissage en autodidacte</h3>
                  <p>HTML, CSS, Javascript, React</p>
                  <p>
                    <CalendarOutlined /> 2021 - 2022
                  </p>
                </>
              ),
            },
            {
              color: "pink",
              children: (
                <>
                  <h3>Licence Economie Gestion</h3>
                  <p>Université de Reims Champagne - Ardenne</p>
                  <p>
                    <CalendarOutlined /> 2014 - 2015
                  </p>
                </>
              ),
            },
            {
              color: "pink",
              children: (
                <>
                  <h3>Bac STG - Gestion des ressources humaines</h3>
                  <p>Lycée Joliot Curie - Hirson</p>
                  <p>
                    <CalendarOutlined /> 2012 - 2014
                  </p>
                </>
              ),
            },
            {
              color: "pink",
              children: (
                <>
                  <h3>Diplôme national du Brevet</h3>
                  <p>Collège Jules Ferry - Rozoy sur Serre</p>
                  <p>
                    <CalendarOutlined /> 2004 - 2008
                  </p>
                </>
              ),
            },
          ]}
        />
      ) : (
        <Timeline
          mode="alternate"
          items={[
            {
              color: "pink",
              children: (
                <>
                  <h3>Téléconseillère clientèle</h3>
                  <p>Acticall - Vervins</p>
                  <p>
                    <CalendarOutlined /> 2016 - 2018
                  </p>
                </>
              ),
            },
            {
              color: "pink",
              children: (
                <>
                  <h3>Vendangeuse</h3>
                  <p>
                    Différentes exploitations viticoles - Champagne-Ardennes
                  </p>
                  <p>
                    <CalendarOutlined /> Plusieurs années consécutives
                  </p>
                </>
              ),
            },
            {
              color: "pink",
              children: (
                <>
                  <h3>Stage - Employée polyvalente</h3>
                  <p>Intermarché - Rozoy-sur-Serre</p>
                  <p>
                    <CalendarOutlined /> 2014
                  </p>
                </>
              ),
            },
            {
              color: "pink",
              children: (
                <>
                  <h3>Stage - Fleuriste</h3>
                  <p>Chlorophylle - Montcornet</p>
                  <p>
                    <CalendarOutlined /> 2013
                  </p>
                </>
              ),
            },
          ]}
        />
      )}
    </div>
  );
};

export default Experience;
