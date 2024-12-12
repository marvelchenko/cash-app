import React from 'react';
import { data } from '../components/Data';

const Section3 = () => {
  return (
    <div className="section-3 bg-[#B106CD] relative h-screen w-full">
      {/* Background Image */}
      <div className="relative h-screen w-full">
        <img
          src={data[0].section3}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Content Overlay */}
        <div className="absolute inset-0 flex mb-80 md:mb-0 flex-col items-start justify-center p-6 md:p-10 z-10 text-center md:text-left">
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-8xl font-bold">
            SAVE ON
          </h1>
          <h1 className="text-red-300 text-4xl md:text-8xl font-bold">
            EVERYDAY
          </h1>
          <h1 className="text-white text-4xl md:text-8xl font-bold">
            SPENDING
          </h1>

          {/* Button and Description */}
          <div className="flex flex-col md:flex-row items-center justify-start gap-6 mt-6">
            <button className="bg-white text-black text-sm font-semibold rounded-full py-2 px-4 w-[200px] md:w-[150px]">
              Learn more
            </button>
            <p className="text-white bg-teal-950 p-4 md:p-0 md:bg-opacity-0 bg-opacity-30 text-lg leading-none">
              Get exclusive discounts with Cash App Pay and Cash Card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
