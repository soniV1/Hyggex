import React from 'react';
import logo from '../../images/logo.svg'

function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div >
            <img  className="w-191 h-39" src={logo} alt='logo'/>
        </div>
        <div>
          <ul className="flex space-x-4 flex gap-x-4">
            <li>
              <a href="#" className="text-menuColor font-inter text-base font-normal leading-5 text-left">Home</a>
            </li>
            <li>
              <a href="#" className="text-menuColor font-inter text-base font-normal leading-5 text-left">Flashcard</a>
            </li>
            <li>
              <a href="#" className="text-menuColor font-inter text-base font-normal leading-5 text-left">Contact</a>
            </li>
            <li>
              <a href="#" className="text-menuColor font-inter text-base font-normal leading-5 text-left text-blue-500 ">FAQ</a>
            </li>
            <li>
              <a href="#" className="text-white font-inter text-base font-normal leading-5 text-left bg-gradient-to-r from-gradientFrom to-gradientTo rounded-full p-2 px-8">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
