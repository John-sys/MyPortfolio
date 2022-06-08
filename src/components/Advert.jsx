import React from "react";
import meeting from "../assets/meeting.jpg";

const Skills = () => {
  return (
    <div className="w-full py-7 px-4 grid-rows-2 ">
      <div className="max-w-[1240px] mx-auto ">
        <div className="grid md:grid-cols-2 p-4">
          {/* 1st Section */}
          <img
            src={meeting}
            alt="img Meeting"
            className=" my-4 w-[400px] h-[300px] rounded-br-[200px] drop-shadow-xl mx-auto"
          />

          <div className="">
            <h1 className="text-5xl font-bold">We Offer Best Services</h1>
            <p className="my-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates veniam consectetur voluptate dicta? Possimus aut ut
              nemo autem. Velit distinctio perspiciatis ipsam quos odit magni
              nesciunt ut nihil beatae unde! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Cum omnis nesciunt architecto illum
              delectus deserunt, minima maxime? At, alias, repellendus omnis ab
              delectus quisquam minus ex, amet deserunt aperiam iusto?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
