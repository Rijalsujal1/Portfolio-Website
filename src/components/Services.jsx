import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import services_data from '../assets/services_data';
import arrow_icon from '../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className="services flex flex-col items-center justify-center gap-20 mx-4 sm:mx-8 lg:mx-40 my-20">
      <div className="services-title relative text-center">
        <h1 className="px-4 py-0 text-4xl sm:text-5xl lg:text-6xl font-medium">My Services</h1>
        <img src={theme_pattern} className="absolute bottom-0 right-0 z-[-1] w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="pattern" />
      </div>

      <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {services_data.map((service, index) => {
          return (
            <div key={index} className="services-format flex flex-col justify-center gap-5 p-5 sm:p-8 lg:p-10 rounded-2xl border-2 transition duration-400 cursor-pointer border-slate-200 hover:border-pink-500">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium">{service.s_no}</h3>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold herotext">{service.s_name}</h2>
              <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl leading-7 max-w-xs">{service.s_desc}</p>
              <div className="services-readmore flex gap-5 items-center mt-5">
                <p className="text-base sm:text-lg lg:text-xl">Read More</p>
                <img src={arrow_icon} className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" alt="arrow icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
