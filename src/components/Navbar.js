import React from 'react';
import { data } from '../components/Data';

const Navbar = () => {
  return (
    <div className='z-20 fixed top-0 left-0 right-0  shadow-md'>
      {/* Notification Bar */}
      <div className="custom-container bg-white w-full h-16 flex  sm:flex-row items-center gap-4 sm:gap-8 justify-center px-4">
        <p className='text-black text-center text-sm'>
          File for free, get your max refund with{' '}
          <span className='font-semibold'>Cash App Taxes</span>
        </p>
        <button className='bg-green-500 rounded-full w-[150px] py-3 px-4 font-semibold text-black hover:bg-green-900 hover:text-white text-sm'>
          Learn more
        </button>
      </div>

      {/* Logo and Login Section */}
      <div className='flex justify-between items-center px-4 py-2'>
        <div className="logo">
          <img src={data[0].logoImg} alt="Logo" className="h-10" />
        </div>
        <div className="login flex items-center gap-4">
          <button className="py-2 px-4 rounded-full text-black bg-white border border-black hover:bg-black hover:text-white">
            Log in
          </button>
          <img
            src={data[0].menuImg}
            alt="Menu"
            className='cursor-pointer h-6'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
