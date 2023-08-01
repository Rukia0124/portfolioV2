import React from "react";
import Navigation from "../components/Navigation";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import About from "../components/About";
import Competences from "../components/Competences";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";

const navItems = [
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
    <div style={{ height: "100vh" }}>
      <Navigation navItems={navItems} />
      <Introduction />

      <About />

      <Competences />

      <Experience />

      <Portfolio />

      <Contact />
      <GoTop />
      <Footer />
    </div>
  );
};

export default Home;
