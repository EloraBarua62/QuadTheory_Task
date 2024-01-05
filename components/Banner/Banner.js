import Image from 'next/image';
import React from 'react';
import banner from '../../public/Image1.png'

const Banner = () => {
    return (
      <div className="lg:w-[1068px] lg:h-[315px] mx-auto rounded-[28px] bg-amber-500 grid grid-cols-2">
        {/* Title */}
        <div className="w-full flex justify-center items-center gap-6">
          <div>
            <h1 className="text-4xl text-white font-semibold">
              Deliver Food To Your <br /> Door Step!
            </h1>
            <h1 className="text-gray-200 mt-6">
              Authentic Food, Quick Service, Fast Delivery
            </h1>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <Image src={banner} alt="" className="object-cover"></Image>
        </div>
      </div>
    );
};

export default Banner;