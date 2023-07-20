import React from "react";
import Navigation from "../components/Navigation";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import Next from "../components/Next";
import About from "../components/About";
import Competences from "../components/Competences";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import { HomeOutlined } from "@ant-design/icons";

const navItems = [
  {
    to: "/",
    icon: <HomeOutlined />,
  },
  {
    href: "#about",
    label: "À propos",
  },
  {
    href: "#competences",
    label: "Compétences",
  },
  {
    href: "#experience",
    label: "Expériences",
  },
  {
    href: "#portfolio",
    label: "Portfolio",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Home = () => {
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Navigation navItems={navItems} />
      <Introduction />
      <Next link="#about" />
      <About />
      <Next link="#competences" />
      <Competences />
      <Next link="#experience" />
      <Experience />
      <Next link="#portfolio" />
      <Portfolio />
      <Next link="#contact" />
      <Contact />
      <GoTop />
      <Footer />
    </div>
  );
};

export default Home;
