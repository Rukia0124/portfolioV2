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

const Home = () => {
  return (
    <div>
      <Navigation />
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
