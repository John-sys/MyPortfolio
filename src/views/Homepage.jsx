import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";

const Homepage = () => {
  return (
    <div className="w-full  text-white flex flex-col">
      <Hero />

      <Introduction />
      
    </div>
  );
};

export default Homepage;
