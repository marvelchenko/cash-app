import React from 'react';
import { data } from '../components/Data';

const Section1 = () => {
  return (
    <div className='section-1'>
      {/* Background Image Section */}
      <div
        className="bg-cover bg-center md:h-screen h-screen relative"
        style={{ backgroundImage: `url(${data[0].section1})` }}
      >
        {/* Content Overlay */}
        <div className='relative z-10 top-1/2 -translate-y-1/2 text-center px-4'>
          {/* Main Headings */}
          <h1 className='text-5xl md:text-8xl font-bold text-white'>
            DO MORE
          </h1>
          <h1 className='text-5xl md:text-8xl font-bold text-white'>
            WITH YOUR
          </h1>

          {/* Money Section */}
          <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 justify-center mt-6'>
            <h1 className='text-5xl md:text-8xl font-bold text-white'>
              MONEY
            </h1>
            {/* Download Section */}
            <div className='flex items-center border-2 border-white rounded-md md:w-[250px] w-[150px] text-white'>
              <p className='ml-3 md:m-8 font-semibold text-center'>
                Download <br /> Cash App
              </p>
              <div className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] border-2 bg-white rounded-md overflow-hidden'>
                <img
                  src={data[0].barCode}
                  alt="QR Code"
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
