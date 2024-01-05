import Image from 'next/image';
import React from 'react';
import banner from '../../public/Image1.png'

const Banner = () => {
    return (
      <div className="w-full lg:w-[800px] xl:w-[1068px] xl:h-[315px] mx-auto rounded-[28px] md:bg-amber-500 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Title */}
        <div className="w-full flex justify-center items-center">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-white font-semibold text-center md:text-left">
              Deliver Food To Your <br /> Door Step!
            </h1>
            <h1 className="text-gray-600 md:text-gray-200 mt-2 md:mt-6">
              Authentic Food, Quick Service, Fast Delivery
            </h1>
          </div>
        </div>
        <div className="w-full h-[250px] sm:h-[350px] md:h-full relative md:static md:overflow-hidden bg-orange-500 md:bg-transparent md:rounded-[28px]">
          <Image
            src={banner}
            alt=""
            className="w-full h-[280px] sm:h-[380px] md:h-full object-cover absolute md:static bottom-0"
          ></Image>
        </div>
      </div>
    );
};

export default Banner;