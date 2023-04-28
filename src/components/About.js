import React from "react";
import Feather from "../assets/images/Feather.png";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div id="about">
      <div className="about-head">
        <h2>A propos de moi</h2>
        <p>Qui suis-je ?</p>
      </div>
      <div className="about-content">
        <img src={Feather} alt="Illustration" />
        <div className="about-text">
          <p>
            Développeuse Web junior, persévérante et déterminée à poursuivre ma
            formation pour devenir une développeuse web qualifiée et
            expérimentée. Toujours à la recherche de nouvelles opportunités pour
            élargir mes connaissances, je compte par la suite me former au
            backend afin de devenir développeuse fullstack.
          </p>

          <Button type="primary" ghost="true">
            <a href="/SamplePDFFile_5mb.pdf" download>
              Télécharger CV <DownloadOutlined />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
