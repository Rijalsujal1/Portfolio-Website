import React from "react";
import profile_img from "../assets/sujal.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {ReactTyped} from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="hero flex flex-col items-center gap-8 px-4 sm:px-8 md:px-12 lg:px-32 py-4">
      <div className="w-full md:w-auto h-auto mt-4 md:mt-0 flex-1 flex justify-center md:justify-start">
        <img
          src={profile_img}
          alt="Profile"
          className="w-[200px] h-[200px] md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl shadow-orange-600"
        />
      </div>
      <div className="text-center md:text-left flex-1">
        <h1 className="text-3xl text-center md:text-5xl lg:text-5xl font-bold">
          <span>I'm Sujal Rijal </span>
          <br />
          <ReactTyped
            strings={['Data Enthusiast', "BI Developer", "Data Analyst",
              "Problem Solver", "Critical Thinker",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </h1>
        <p className="mt-4 md:mt-6 lg:mt-7 text-lg md:text-xl leading-relaxed">
          I am a Data Enthusiast from Kathmandu, Nepal.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center  gap-6 text-lg md:text-xl font-semibold mt-5">
          <div className="px-8 py-4 rounded-xl cursor-pointer  text-white bg-gradient-to-r from-[#df8908] to-[#b415ff] text-base sm:text-lg lg:text-xl font-medium transition-transform duration-300 transform hover:scale-105 ">
            <AnchorLink
              className="no-underline text-white "
              offset={50}
              href="#contact"
            >
              Connect with me
            </AnchorLink>
          </div>
          <div className="px-8 py-4 rounded-xl cursor-pointer border-2 border-gray-100 text-gray-100 transition-transform duration-300 transform hover:scale-105">
            My Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
