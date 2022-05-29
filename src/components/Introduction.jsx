import React from "react";
import newImage from '../assets/newImage.jpg';

const Introduction = () => {
  return (
    <div className="w-full bg-[#e9ecef] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-black">
          <img src={newImage} alt="/" className=" items-center flex justify-center mx-auto my-4 w-[400px] h-[500px] "/>
          <div className="my-4">
              <p className="uppercase text-[#00df9a] font-bold text-[20px] ">Introduction</p>
              <h1 className="font-bold text-black md:text-4xl sm:text-2xl text-2xl py-2">Frontend Web Developer</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tenetur suscipit reiciendis error illo optio quasi repellendus sequi, asperiores numquam neque dolores ipsam quas minus ipsum nostrum eligendi ullam unde!</p>
          </div>
      </div>
    </div>
  );
};

export default Introduction;
