import React from "react";
import meeting from "../assets/meeting.jpg";
import phone1 from "../assets/phone1.jpg";

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
      <div className=" max-w-[1240px] mx-auto md:flex md:flex-row p-4 md:space-x-8  ">
        <div className="bg-[url('https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-[400px] h-[300px] rounded-xl hover:translate-y-1 hover:scale-110 duration-300 transition ease-in-out ">
          <div className="bg-lightgray rounded-bl-xl rounded-br-xl bg-opacity-50 ">
            <p className="text-white font-bold text-[20px] mt-[61%] py-5 px-4  ">
              Design Mobile Apps
            </p>
          </div>
        </div>

        <div className="bg-[url('https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-[400px] h-[300px] rounded-xl hover:translate-y-1 hover:scale-110 duration-300 transition ease-in-out ">
          <div className="bg-lightgray rounded-bl-xl rounded-br-xl bg-opacity-50">
            <p className="text-white font-bold text-[20px] mt-[61%] py-5 px-4  ">
              UI/UX Designs
            </p>
          </div>
        </div>

        <div className="bg-[url('https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-[400px] h-[300px] rounded-xl hover:translate-y-1 hover:scale-110 duration-300 transition ease-in-out  ">
          <div className="bg-lightgray rounded-bl-xl rounded-br-xl bg-opacity-50">
            <p className="text-white font-bold text-[20px] mt-[61%] py-5 px-4 ">
              Design Byte App
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
