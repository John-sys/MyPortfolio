import React from "react";
// import Typed from "react-typed";
import Bounce from "react-reveal/Bounce";

const Hero = () => {
  return (
    <div className="text-white  ">
      <div className="max-w-[800px]  w-full h-screen mx-auto flex flex-col text-center justify-center  ">
        <p className=" uppercase text-[#00df9a] font-bold p-2 ">
          LETS BUILD SOMETHING TOGETHER
        </p>
        <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl">
          Hi, I'm John
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            A Front-End Web Developer{" "}
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#6c757d] ">
          I'm a front-end web developer specializing in building exceptional
          digital experiences.
        </p>
        <Bounce>
          <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium mt-6 text-black hover:bg-gray mx-auto py-3 ">
            Get Started
          </button>
        </Bounce>
      </div>
    </div>
  );
};

export default Hero;
