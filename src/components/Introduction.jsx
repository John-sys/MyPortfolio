import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import newImage from "../assets/newImage.jpg";
import Slide from "react-reveal/Slide";
import HeadShake from "react-reveal/HeadShake"

const Introduction = () => {
  return (
    <div className="w-full bg-white py-7 px-4 " id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-black ">
        <Slide left>
          <img
            src={newImage}
            alt="/"
            className=" items-center flex justify-center mx-auto my-4 w-[400px] h-[500px] rounded-lg drop-shadow-xl "
          />
        </Slide>

        <div className=" my-auto ">
          <Slide right>
            <p className="uppercase text-[#00df9a] font-bold text-[20px] ">
              About
            </p>
            <h1 className="font-bold text-black md:text-4xl sm:text-2xl text-2xl py-2">
              Who I Am
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              tenetur suscipit reiciendis error illo optio quasi repellendus
              sequi, asperiores numquam neque dolores ipsam quas minus ipsum
              nostrum eligendi ullam unde! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Numquam excepturi tempora cupiditate
              enim corrupti pariatur voluptatum accusantium, error praesentium
              aliquam rem culpa vero, ex sint facilis eligendi aperiam ut
              magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia a delectus corporis nulla, accusamus magnam, nobis, sequi
              placeat reiciendis fuga repellendus perferendis aliquid numquam
              magni veritatis vel. Quasi, deserunt adipisci!{" "}
            </p>
          </Slide>

          <HeadShake>
            <div className="flex justify-start mt-5 space-x-7">
              <FaGithub
                size={28}
                className="hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out hover:text-purple "
              />
              <BsLinkedin
                size={28}
                className="hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out "
              />
              <BsFacebook
                size={28}
                className="hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out hover:text-facebook "
              />
              <GrInstagram
                size={28}
                className="hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out hover:text-red "
              />
            </div>
          </HeadShake>

        </div>
      </div>
    </div>
  );
};

export default Introduction;
