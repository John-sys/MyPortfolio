import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
  // let [open,setOpen]=useState(false)

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full top-0 left-0 bg-transparent ">
      <div className="md:flex py-4 md:px-10 px-5 items-center justify-between mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#00df9a] justify-between md:ml-[70px] ">
          <a href="/">
            <h1>J&J</h1>
          </a>
        </div>

        <div className="md:hidden text-3xl absolute right-8 top-4 cursor-pointer text-white">
          <IoIosMenu
            size={34}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
        {/* Mobile menu view */}
        {showMenu && (
          <ul className="md:hidden md:items-center items-center py-4 space-y-5 text-white ">
            <li className="md:ml-8 text-lg ">
              <a
                href="/"
                className="text-gray-800 hover:text-gray duration-200 text-selected-text"
              >
                Home{" "}
              </a>
            </li>
            <li className="md:ml-8 text-lg ">
              <a
                href="/about"
                className="text-gray-800 hover:text-gray duration-200"
              >
                Projects
              </a>
            </li>
            <li className="md:ml-8 text-lg ">
              <a
                href="/projects"
                className="text-gray-800 hover:text-gray duration-200"
              >
                Services
              </a>
            </li>
            <li className="md:ml-8 text-lg ">
              <a
                href="/projects"
                className="text-gray-800 hover:text-gray duration-200"
              >
                Pricing
              </a>
            </li>
          </ul>
        )}

        {/* Desktop menu view */}
        <ul className="hidden md:flex md:items-center items-center mr-2 text-white ">
          <li className=" text-lg font-lora hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out ">
            <a
              href="/"
              className="text-gray-800 hover:text-gray duration-200 "
            >
              Home
            </a>
          </li>
          <li className="md:ml-8 text-lg font-lora hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out">
            <a
              href="about"
              className="text-gray-800 hover:text-gray duration-200"
            >
              About
            </a>
          </li>
          <li className="md:ml-8 text-lg font-lora hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out">
            <a
              href="#services"
              className="text-gray-800 hover:text-gray duration-200"
            >
              Services
            </a>
          </li>
          <li className="md:ml-8 text-lg flex flex-row font-lora hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out">
            <a
              href="#pricing"
              className="text-gray-800 hover:text-gray duration-200"
            >
              Projects
            </a>
            {/* <div className="bg-purple w-[9px] h-[9px] rounded-[50%] animate-pulse "></div> */}
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;