import React from "react";
import newImage from '../assets/newImage.jpg';

const Introduction = () => {
  return (
    <div className="w-full bg-white py-7 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-black">
          <img src={newImage} alt="/" className=" items-center flex justify-center mx-auto my-4 w-[400px] h-[500px] rounded-lg drop-shadow-xl  "/>
          <div className="my-4 my-auto ">
              <p className="uppercase text-[#00df9a] font-bold text-[20px] ">Introduction</p>
              <h1 className="font-bold text-black md:text-4xl sm:text-2xl text-2xl py-2">A Brief Introduction</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tenetur suscipit reiciendis error illo optio quasi repellendus sequi, asperiores numquam neque dolores ipsam quas minus ipsum nostrum eligendi ullam unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi tempora cupiditate enim corrupti pariatur voluptatum accusantium, error praesentium aliquam rem culpa vero, ex sint facilis eligendi aperiam ut magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a delectus corporis nulla, accusamus magnam, nobis, sequi placeat reiciendis fuga repellendus perferendis aliquid numquam magni veritatis vel. Quasi, deserunt adipisci! </p>
          </div>
      </div>
    </div>
  );
};

export default Introduction;
