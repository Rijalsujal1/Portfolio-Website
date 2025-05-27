import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="portfolio" className="mywork flex flex-col items-center justify-center gap-20 my-20 mx-4 sm:mx-8 lg:mx-20">
      <div className="mywork-title relative text-center">
        <h1 className="py-0 px-4 text-4xl sm:text-5xl lg:text-6xl font-medium">My latest work</h1>
        <img src={theme_pattern} alt="pattern" className="absolute bottom-0 right-0 z-[-1] w-20 h-10 sm:w-30 sm:h-30 lg:w-35 lg:h-35" />
      </div>

      <div className="mywork-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {mywork_data.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              className="box-border w-auto h-60 sm:h-auto lg:h-auto transition-transform duration-300 cursor-pointer hover:scale-105 hover:border-4 hover:border-rose-500 hover:rounded-xl"
              alt="work"
            />
          );
        })}
      </div>
      <div className="mywork-showmore flex items-center gap-4 rounded-2xl border-2 border-white px-8 py-4 text-lg font-medium transition-all duration-300 cursor-pointer hover:gap-6">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default Mywork;
