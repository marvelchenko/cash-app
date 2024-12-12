import React from 'react';
import { data } from '../components/Data';

const Section7 = () => {
  return (
    <div className="section-7 bg-white relative w-full">
      {/* First Card Section */}
      <div className="relative h-screen w-full">
        <img
          src={data[0].section7}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 top-[-600px] md:top-[-50%] flex flex-col items-center justify-center p-6 md:p-10 z-10">
          {/* Card Content */}
          <div className="relative bg-cover bg-center">
            <img src={data[0].card} alt="Card" className="w-[200px] md:w-[300px] z-0" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-20">
              <h3 className="text-white text-sm md:text-xl font-semibold text-center">
                Download Cash App To Get Started
              </h3>
              <div className="flex p-2 items-center justify-around bg-white md:w-[200px] w-[150px] rounded-md text-sm mt-6">
                <p className="ml-3 md:m text-center text-black leading-none font-semibold text-sm">
                  Download <br /> Cash App
                </p>
                <div className="size-5 md:size-8 border-2 bg-white rounded-md overflow-hidden">
                  <img
                    src={data[0].barCode}
                    alt="BarCode"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 top-[-30%] md:top-[13%] left-0 right-0 flex gap-4 items-center justify-center md:ml-[]  ">
          <h1 className="text-black text-2xl font-bold">Explore</h1>
          <h1 className="text-black text-2xl font-bold">More</h1>
        </div>
      </div>

      {/* Second Card Section */}
      <div className="absolute md:top-[10%] top-[50%] left-0 right-0 flex flex-col items-start justify-center p-10 z-10">
        <div className="relative bg-cover bg-center">
          <img src={data[0].families} alt="Families" className="w-[160px] md:w-[300px] md:ml-[15%] z-0" />
          <div className="absolute top-[-130px] md:top-[-240px] left-0 right-0 bottom-0 flex flex-col justify-center items-start z-20">
            <h3 className="text-white text-sm mb-2 md:text-3xl md:mb-4 font-semibold ml-5 md:ml-20 leading-none">
              Cash App for <br /> Everyone 13+
            </h3>
            <button className="bg-white ml-5 md:text-xl custom-text text-black md:ml-20 font-semibold rounded-full py-2 px-2 w-[70px] md:w-[150px]">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Third Card Section */}
      <div className="absolute md:top-[13%] top-[45%] md:left-[68%] left-[40%] right-0 flex flex-col items-start justify-center p-4 z-10">
        <div className="relative bg-cover bg-center">
          <img src={data[0].taxes} alt="Taxes" className="w-[160px] md:w-[300px] z-0" />
          <div className="absolute top-[-130px] md:top-[-240px] left-0 right-0 bottom-0 flex flex-col justify-center items-start z-20">
            <h3 className="text-white text-sm md:text-3xl md:mb-4 font-semibold ml-5 leading-none">
              Pay 0% to File <br /> Your Taxes
            </h3>
            <button className="bg-white md:text-xl ml-5 custom-text text-black font-semibold rounded-full py-2 px-2 w-[70px] md:w-[150px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
