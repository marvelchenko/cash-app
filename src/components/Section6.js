import React from 'react';
import { data } from '../components/Data';

const Section6 = () => {
  return (
    <div className="section-6 bg-[#7527F4] relative w-full">
      {/* Background Image */}
      <div className="relative h-screen w-full">
        <img
          src={data[0].section6}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Content Overlay */}
        <div className="absolute mb-96 md:mb-0 inset-0 flex flex-col items-start justify-center p-6 md:p-10 z-10 text-center md:text-left">
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-8xl font-bold">
            SLIDE INTO
          </h1>
          <h1 className="text-red-300 text-4xl md:text-8xl font-bold">
            THE STOCK
          </h1>
          <h1 className="text-white text-4xl md:text-8xl font-bold">
            MARKET
          </h1>

          {/* Button and Description */}
          <div className="flex flex-col md:flex-row items-center justify-start gap-6 mt-6">
            <button className="bg-white text-black text-sm font-semibold rounded-full py-2 px-4 w-[200px] md:w-[150px]">
              Learn more
            </button>
            <div className="text-center p-4 bg-teal-950 md:bg-opacity-0 bg-opacity-30">
              <p className="text-white italic text-lg leading-none">
                Investing is simple, whether you're new to it or already have a portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
