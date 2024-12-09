import React, { useState } from 'react';
import { data } from '../components/data';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between m-8 items-center fixed w-full z-10 bg-[#000300] bg-opacity-50 shadow-md">
        {/* Logo Section */}
        <div className="flex justify-between w-[300px]">
          <div className="md:flex md:items-center gap-5">
            <img src={data[0].image} alt="logo" className="w-20" />
            <h2 className="font-bold text-xl">
              BLM Logistics <br /> <span className="font-light">Limited</span>
            </h2>
          </div>
          <div className="side-bottom border-s-2 border-gray-500 "></div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full py-2 px-4 pr-10 bg-gray-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <CiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-800 text-lg" />
        </div>

        {/* Menu Links */}
        <div>
          <ul className="flex gap-8 mr-20">
            <li className="font-semibold hover:border-b hover:border-green-500">
              Home
            </li>
            <li className="font-semibold hover:border-b hover:border-green-500">
              About
            </li>
            <li className="font-semibold hover:border-b hover:border-green-500">
              Services
            </li>
            <li className="font-semibold hover:border-b hover:border-green-500">
              Join
            </li>
            <li className="font-semibold hover:border-b hover:border-green-500">
              Contact
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-10 bg-[#000300] bg-opacity-50 text-white">
        <div className="relative flex flex-col items-center p-7">

          {/* Dropdown Icon */}
          <button
            onClick={toggleMenu}
            className={`absolute text-3xl transition-transform duration-300 ${
              isOpen ? 'translate-y-12' : 'translate-y-0'
            }`}
          >
            {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="flex flex-col items-center text-center gap-5 mt-16 transition-all duration-300 mb-8"
          >
            <img src={data[0].image} alt="logo" className="w-12 mb-2" />
            <ul className="flex flex-col gap-4 text-lg">
              <li className="font-semibold hover:border-b hover:border-green-500">
                Home
              </li>
              <li className="font-semibold hover:border-b hover:border-green-500">
                About
              </li>
              <li className="font-semibold hover:border-b hover:border-green-500">
                Services
              </li>
              <li className="font-semibold hover:border-b hover:border-green-500">
                Join
              </li>
              <li className="font-semibold hover:border-b hover:border-green-500">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
