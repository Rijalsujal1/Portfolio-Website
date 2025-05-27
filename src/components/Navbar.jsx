import React, { useState } from 'react';
import logo from '../assets/logo.png';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative flex items-center justify-between mx-4 md:mx-8 lg:mx-20 xl:mx-[170px] my-5 md:my-9'>
      <img src={logo} alt="Logo" className="w-24 md:w-32 cursor-pointer" />
      <div className="md:hidden z-20">
        <img 
          src={isMenuOpen ? menu_close : menu_open} 
          alt="Menu Icon" 
          className="w-8 h-8 cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>
      <ul className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center gap-6 transition-transform duration-300 md:static md:flex md:flex-row md:bg-transparent md:h-auto md:w-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {['home', 'about', 'services', 'portfolio', 'contact'].map((item, index) => (
          <li key={index} className='flex flex-col gap-1 cursor-pointer text-center md:text-left'>
            <AnchorLink 
              className='anchor-link decoration-0 text-white text-2xl md:text-base' 
              offset={50} 
              href={`#${item}`} 
              onClick={() => { setMenu(item); setIsMenuOpen(false); }}
            >
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
              {menu === item && <img src={underline} className="flex m-auto md:m-0" alt="Underline" />}
            </AnchorLink>
          </li>
        ))}
        <div className='px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-xl cursor-pointer hover:scale-105 transition-transform duration-300'>
          <AnchorLink className='decoration-0 text-white' offset={50} href='#contact' onClick={() => setIsMenuOpen(false)}>Connect with me</AnchorLink>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
