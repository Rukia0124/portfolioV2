import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Competences = () => {
  return (
    <div id="competences" className="competences-container">
      <h2>Compétences</h2>
      <p>Mes connaissances</p>
      <div className="competences-content">
        <Collapse accordion expandIconPosition="end">
          <Panel
            header={
              <span>
                <i className="fa-solid fa-code"></i> Frontend
              </span>
            }
            key="1"
          >
            <ul>
              <li>HTML</li>
              <li>CSS </li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </Panel>
          <Panel
            header={
              <span>
                <i className="fa-solid fa-terminal"></i> Backend
              </span>
            }
            key="2"
          >
            <ul>
              <li>NodeJs</li>
              <li>Postman</li>
              <li>MongoDB</li>
            </ul>
          </Panel>
          <Panel
            header={
              <span>
                <i className="fa-solid fa-plus"></i> Autres
              </span>
            }
            key="3"
          >
            <ul>
              <li>SEO</li>
              <li>Accessibilité</li>
              <li>Figma</li>
              <li>Office</li>
              <li>Google Workspace</li>
            </ul>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Competences;
