import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://github.com/Rukia0124"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined />
      </a>
      {/* <a href="https://twitter.com/Rukia0124" target="_blank" rel="noopener noreferrer">
        <TwitterOutlined />
      </a> */}
      <a
        href="https://www.linkedin.com/in/audrey-sahari-368913194/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinOutlined />
      </a>
    </div>
  );
};

export default Socials;
