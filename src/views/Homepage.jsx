import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Advert from "../components/Advert";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Homepage = () => {
  return (
    <div className="w-full  text-white flex flex-col">
      <Hero />

      <Introduction />

      <Advert />

      <Skills />

      <Projects />
    </div>
  );
};

export default Homepage;
