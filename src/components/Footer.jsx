import React from 'react';
import footer_logo from '../assets/logo.png';
import user_icon from '../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer mx-4 md:mx-8 lg:mx-20 xl:mx-[170px] my-12 flex flex-col gap-8'>
      <div className="footer-top flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <div className="footer-top-left flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <img src={footer_logo} alt="Footer Logo" className="w-[200px] lg:w-[200px] mt-[40px]" />
          <p className='text-lg lg:text-2xl max-w-[400px]'>
            I am a React Enthusiast from Nepal.
          </p>
        </div>
        <div className="footer-top-right flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
          <div className="footer-email-input flex gap-4 px-4 py-2 rounded-2xl bg-[#32323b]">
            <img src={user_icon} alt="User Icon" className="w-6 h-6" />
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='outline-none border-none bg-transparent text-[#a0a0a0] text-base sm:text-lg lg:text-xl' 
            />
          </div>
          <button className="subscribe border-none text-white bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-xl px-4 py-2 text-base sm:text-lg lg:text-xl font-medium transition-transform duration-300 transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="footer-bottom flex flex-col lg:flex-row justify-between items-center text-base sm:text-lg lg:text-xl gap-4">
        <p>© 2024 Sujal Rijal. All rights reserved.</p>
        <div className="footer-bottom-right flex gap-4">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
