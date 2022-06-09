import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full bg-[#191919] py-2 px-4 h-[65px] border-t-2 border-[#DDDDDD] border-opacity-20 ">
      <div className="container p-4 flex flex-row">
        <div className="">
          <p className="text-[#30475E] font-bold"> ©JayJay </p>
        </div>

        <div className="flex flex-row space-x-7 ml-auto">
          <FaGithub size={18} />
          <BsTwitter size={18} />
          <BsFacebook size={18} />
          <GrInstagram size={18} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
