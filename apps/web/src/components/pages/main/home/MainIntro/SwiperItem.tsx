import React from 'react';
import FitImage from '../../../../ui/image/fit-image';
import { SwiperItemType } from '../../../../types/swiper/SwiperType';

function SwiperItemLayout({ item }: { item: SwiperItemType }) {
  return (
    <li className="grid lg:grid-cols-2 gap-6 md:grid-cols-1">
      <div className="flex flex-col items-center mt-2 text-center md:items-start md:text-left">
        <div className="hidden md:inline-block bg-gray-400 rounded-full px-4 py-5 text-md text-white">
          {item.buttonLabel}
        </div>
        <h1 className="text-3xl md:text-[60px] font-bold mt-4">{item.title}</h1>
        <p className="hidden md:mt-12 md:block text-gray-500 text-base md:text-2xl mt-4">
          {item.content}
        </p>
        <div className="flex gap-4 mt-6">
          <button className=" bg-[#FFD84D] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/90">
            Get Started
          </button>
          <button className="border-2 border-[#FFD84D] text-[#FFD84D] px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/10">
            Join For Free
          </button>
        </div>
      </div>

      <div className="max-w-[400px] h-auto mx-auto mr-4 md:max-w-[540px] md:h-[550px] mt-2">
        <FitImage src={item.src} alt={item.title} className="" />
      </div>
    </li>
  );
}

export default SwiperItemLayout;
