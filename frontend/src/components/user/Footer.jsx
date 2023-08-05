import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400 leading-loose">
            Crafting quality metal products that stand the test of time. We're passionate about providing unmatched craftsmanship and exceptional service.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">123 Main Street</p>
          <p className="text-gray-400">City, Country</p>
          <p className="text-gray-400">Email: bobametals4@gmail.com</p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">Explore</h2>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 mb-2">
            Products
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 mb-2">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Blog
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">Connect</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Boba Metals. All rights reserved.</p>
        <p className="mt-2 text-sm opacity-70">
          Made with <span className="text-red-500">&hearts;</span> by{' '}
          <a href="https://adhilakbar.com" className="text-white hover:underline">
            ADHIL AKBAR
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
