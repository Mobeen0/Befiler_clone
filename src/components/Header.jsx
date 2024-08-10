import React from 'react';
import logo from '../assets/logo.png'
import usaFlag from '../assets/usa-flag.png';
import { FaUnlockAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-white p-4 text-center px-80 flex flex-row border-y font-sans portrait:px-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <img src={logo} alt="logo" className="h-12" />
          </div>
          <ul className="flex space-x-4 font-bold text-gray-600">
            <li className = "py-1 mx-3"><a href="#" className="hover:text-red-700">TAX TOOLS</a></li>
            <li className = "py-1 mx-3"><a href="#" className="hover:text-red-700">BUSINESS SERVICES</a></li>
            <li className = "py-1 mx-3"><a href="#" className="hover:text-red-700">SALES TAX</a></li>
            <li className = "py-1 mx-3">
              <a href="#" className="hover:text-red-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-gray-500 to-red-500"> 
                <img src = {usaFlag} className = "rounded-full object-fit h-4 aspect-square inline" />
                {' '}
                USA SERVICES
              </a>
              </li>
            <li className = "ml-7 rounded-md border border-red-400 text-red-700 px-4 py-1 hover:cursor hover:bg-red-600 hover:text-white"><a href="#" className=" font-normal no-underline"> Sign Up</a></li>
            <li className = "rounded-md bg-gradient-to-b from-red-400  to-red-600 px-4 py-1 border border-red-400 flex flex-row items-center justify-center hover:pointer hover:from-red-500 hover:to-red-700">
            < FaUnlockAlt className = "text-white mr-1"/> <a href="#" className="text-white font-normal no-underline">Sign In</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
