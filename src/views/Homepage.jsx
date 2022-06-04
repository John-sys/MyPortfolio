import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";

const Homepage = () => {
  return (
    <div className="w-full  text-white flex flex-col">
      <Hero />

      <Introduction />
      
      <Skills/>
    </div>
  );
};

export default Homepage;
