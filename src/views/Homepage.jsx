import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Advert from "../components/Advert";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <div className="w-full  text-white flex flex-col">
      <Hero />

      <Introduction/>

      <Advert />

      <Skills />

      <Projects />

      <Contact/>

      <Footer/>
    </div>
  );
};

export default Homepage;
