import React from 'react';
import { data } from '../components/Data';

const Section2 = () => {
  return (
    <div className="section-2 bg-[#058189] relative h-screen w-full">
      {/* Background Image */}
      <div className="relative h-screen w-full">
        <img
          src={data[0].section2}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Content Overlay */}
        <div className="absolute mb-96 md:mb-0 inset-0 flex flex-col items-start justify-center p-6 md:p-10 z-10 text-center md:text-left">
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-8xl font-bold">
            PAY
          </h1>
          <h1 className="text-teal-300 text-4xl md:text-8xl font-bold">
            ANYONE
          </h1>
          <h1 className="text-white text-4xl md:text-8xl font-bold">
            INSTANTLY
          </h1>

          {/* Button and Description */}
          <div className="flex flex-col md:flex-row items-center justify-start gap-6 mt-6">
            <button className="bg-white text-black text-sm font-semibold rounded-full py-2 px-4 w-[200px] md:w-[150px]">
              Learn more
            </button>
            <p className="text-white bg-teal-950 p-4 md:p-0 md:bg-opacity-0 bg-opacity-30 text-lg leading-none">
              It's free to send and receive money, stocks, or bitcoin within Cash App.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
