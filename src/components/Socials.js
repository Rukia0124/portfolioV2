import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/Rukia0124">
        <GithubOutlined />
      </a>
      <a href="https://twitter.com/Rukia0124">
        <TwitterOutlined />
      </a>
      <a href="https://www.linkedin.com/in/audrey-sahari-368913194/">
        <LinkedinOutlined />
      </a>
    </div>
  );
};

export default Socials;
