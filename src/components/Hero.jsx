import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white  ">
      <div className="max-w-[800px]  w-full h-screen mx-auto flex flex-col text-center justify-center  ">
          <p className=" uppercase text-[#00df9a] font-bold p-2 ">Access to the best designs</p>
          <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl">Growth in Business</h1>
          <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Websites for</p>
              <Typed strings={['Everyone', 'Everybody', 'Everywhere']} typedSpeed={120} backSpeed={140} loop className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 text-gray" />
          </div>
          <p className="md:text-2xl text-xl font-bold text-[#6c757d] ">Building websites for every available business market and creating opportunities for entrepreneurs</p>
          <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-2 text-black hover:bg-gray mx-auto py-3 ">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
