import Image from 'next/image';
import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";
import flower from '../../../public/Image2.png'

const Footer = () => {
    return (
      <div className="w-full px-5 sm:px-0 bg-amber-500">
        <div className="w-full lg:w-[800px] xl:w-[1068px] h-[414px] mx-auto flex">
          {/* left section */}
          <div className="w-3/4 pt-10">
            <div className="bg-white rounded-[8px] md:rounded-[20px] w-[357px] md:w-[576px] h-[56px] flex justify-between items-center pl-5 pr-2">
              <h1 className="text-gray-400">Enter Your Email</h1>
              <div className="w-[177px] h-[44px] bg-orange-600 md:rounded-[15px] flex justify-center items-center gap-2">
                <h1 className=" text-white">Subscribe</h1>
                <FaArrowRight className="text-white" />
              </div>
            </div>

            <div className="flex justify-between items-end pt-16">
              {/* copyright text */}
              <div>
                <h1>pti</h1>
                <h1>Copyright©Tripp.All Right Reserved</h1>
              </div>

              {/* Icons */}
              <div className="flex justify-between items-end gap-2">
                <div className="w-[40px] h-[40px] rounded-full bg-white text-orange-600 flex justify-center items-center">
                  <FaGoogle />
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-white text-orange-600 flex justify-center items-center">
                  <FaTwitter />
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-white text-orange-600 flex justify-center items-center">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="w-1/4">
            <Image src={flower} alt=''></Image>
          </div>
        </div>
      </div>
    );
};

export default Footer;