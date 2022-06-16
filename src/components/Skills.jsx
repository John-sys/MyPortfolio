import React from "react";
import Zoom from "react-reveal/Zoom";

const Skills = () => {
  return (
    <div className="w-full md:py-2 px-4 ">
      <Zoom>
        <div className="max-w-[1240px] md:mx-auto px-5">
          {/* title */}
          <div className=" md:mx-5 space-y-4 my-[30px] w-[250px] md:ml-[5rem] ">
            <p className="text-[#00df9a] text-[20px] ">SKILLS</p>
            <h1 className="text-2xl font-bold">What I can Do</h1>
          </div>

          {/* content */}
          <div className="flex md:flex-row flex-col md:space-x-5 items-center justify-center ">
            <div className="p-4 w-[280px] ">
              <div className="h-full border-2 border-purple border-opacity-60 rounded-lg overflow-hidden ">
                {/* image */}
                <div className="flex justify-center item-center bg-lightgray">
                  <lord-icon
                    src="https://cdn.lordicon.com/wloilxuq.json"
                    trigger="loop"
                    style={{ width: "100px", height: "100px" }}
                  ></lord-icon>
                </div>

                {/* text */}
                <div className="p-6 hover:bg-lightgray hover:text-white transition duration-300 ease-in  ">
                  <h1 className="font-bold text-xl mb-1">UI/UX Design</h1>
                  <h2 className="mb-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime aut ad odit harum nulla, quaerat
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 w-[280px] ">
              <div className="h-full border-2 border-purple border-opacity-60 rounded-lg overflow-hidden ">
                {/* image */}
                <div className="flex justify-center item-center bg-lightgray">
                  <lord-icon
                    src="https://cdn.lordicon.com/qhgmphtg.json"
                    trigger="loop"
                    style={{ width: "100px", height: "100px" }}
                  ></lord-icon>
                </div>

                {/* text */}
                <div className="p-6 hover:bg-lightgray hover:text-white transition duration-300 ease-in  ">
                  <h1 className="font-bold text-xl mb-1">Web Development</h1>
                  <h2 className="mb-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime aut ad odit harum nulla, quaerat
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 w-[280px] ">
              <div className="h-full border-2 border-purple border-opacity-60 rounded-lg overflow-hidden ">
                {/* image */}
                <div className="flex justify-center item-center bg-lightgray"></div>

                {/* text */}
                <div className="p-6 hover:bg-lightgray hover:text-white transition duration-300 ease-in  ">
                  <h1 className="font-bold text-xl mb-1">Mobile App Dev</h1>
                  <h2 className="mb-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime aut ad odit harum nulla, quaerat
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Skills;
