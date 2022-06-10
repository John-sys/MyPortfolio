import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import '../index.css'

const Contact = () => {
  return (
    <div className="w-full md:mx-auto md:max-w-[1240px] h-[600px] flex justify-center items-center ">
      <div className="grid md:grid-cols-2 p-4">
        {/* left section */}
        <div className="flex flex-col ml-auto space-y-2 ">
          <p className="text-4xl font-bold p-4">
            Contact
            <span className="text-[#00df9a] ml-2 ">Me</span>
          </p>
          <p className="max-w-[400px] p-4 ">
            We provide high standard clean website for your business solutions
          </p>
          {/* contact details */}
          <div className="">
            {/* description 1 */}
            <div className="flex flex-row space-x-2 p-4  ">
              <div className="bg-[#00df9a] rounded-full p-4 text-black  ">
                <BsFillTelephoneFill size={20} />
              </div>
              <div className="flex flex-col">
                <p className="text-[#00df9a] px-2 text-[17px] ">Call us on</p>
                <p className="px-2">+233(0) 59 2267 408</p>
              </div>
            </div>

            {/* description 2 */}
            <div className="flex flex-row space-x-2 p-4  ">
              <div className="bg-[#00df9a] rounded-full p-4 text-black  ">
                <FaEnvelope size={20} />
              </div>
              <div className="flex flex-col">
                <p className="text-[#00df9a] px-2 text-[17px] ">Email Us</p>
                <p className="px-2">gbayakokoyajohnjr@gmail.com</p>
              </div>
            </div>

            {/* description 3 */}
            <div className="flex flex-row space-x-2 p-4  ">
              <div className="bg-[#00df9a] rounded-full p-4 text-black  ">
                <IoLocationSharp size={20} />
              </div>
              <div className="flex flex-col">
                <p className="text-[#00df9a] px-2 text-[17px] ">Visit Office</p>
                <p className="px-2">Kasoa, Ghana </p>
              </div>
            </div>
          </div>
        </div>

        {/* text fields */}
        <div className="">
          <div className="p-4 text-white">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
