import React, { useEffect, useState } from 'react';
import Home from './Home';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className={'bg-blue-900 p-4 flex justify-between items-center fixed top-0 w-full'}>
      <div className="flex items-center">
        {/* Logo and Title */}
        <div className="text-white font-bold text-lg">
        {/* <span>
          <img
            src={process.env.PUBLIC_URL + '/logo512.png'}
            alt="Logo"
            className="h-8 w-8" // Adjust the height and width as needed
          />
        </span> */}
        <span className="ml-2">Boba Metals</span>
        </div>
      </div>
      <div className="md:hidden relative">
        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className={`h-6 w-6 transition-transform duration-300 transform ${menuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <div
          className={`space-y-4 absolute top-full right-0 bg-blue-900 mt-3 py-4 px-7 ${
            menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          } transition-all duration-300 origin-top transform`}
          style={{
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
          }}
        >
          <a href="#" className="text-white block hover:text-gray-300 whitespace-nowrap">Home</a>
          <a href="#" className="text-white block hover:text-gray-300 whitespace-nowrap">Products</a>
          <a href="#" className="text-white block hover:text-gray-300 whitespace-nowrap">About</a>
          <a href="#" className="text-white block hover:text-gray-300 whitespace-nowrap">Contact Us</a>
        </div>
      </div>
      <div className="hidden md:flex space-x-10">
        {/* Navigation Links (Desktop) */}
        <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">Home</a>
        <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">Products</a>
        <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">About</a>
        <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">Contact Us</a>
      </div>
    </nav>
    </>
  );
}

export default Nav;
