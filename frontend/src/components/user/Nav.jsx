import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-900 p-4 flex justify-between items-center fixed top-0 w-full z-20">
      <div className="flex items-center">
        {/* Logo and Title */}
        <div className="text-white font-bold text-lg flex items-center space-x-2">
          <img
            src={process.env.PUBLIC_URL + '/logo512.png'}
            alt="Logo"
            className="h-8 w-8"
          />
          <span>Boba Metals</span>
        </div>
      </div>
      <div className="md:hidden relative">
        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className={`h-6 w-6 transition-transform duration-300 transform ${
              menuOpen ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full right-0 bg-blue-900 mt-3 py-4 px-7 transition-all duration-300 origin-top space-y-3 transform rounded-b-lg`}
        >
          <Link
            to={`/`}
            className="block text-white hover:text-gray-300 whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to={`/products`}
            className="block text-white hover:text-gray-300 whitespace-nowrap"
          >
            Products
          </Link>
          <Link
            to={`/about`}
            className="block text-white hover:text-gray-300 whitespace-nowrap"
          >
            About
          </Link>
          <Link
            to={`/contact`}
            className="block text-white hover:text-gray-300 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="hidden md:flex space-x-10">
        {/* Navigation Links (Desktop) */}
        <Link
          to={`/`}
          className="text-white hover:text-gray-300 whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          to={`/products`}
          className="text-white hover:text-gray-300 whitespace-nowrap"
        >
          Products
        </Link>
        <Link
          to={`/about`}
          className="text-white hover:text-gray-300 whitespace-nowrap"
        >
          About
        </Link>
        <Link
          to={`/contact`}
          className="text-white hover:text-gray-300 whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
