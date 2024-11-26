import React from 'react';
import FitImage from '../../../../ui/image/fit-image';
import { SwiperItemType } from '../../../../types/swiper/SwiperType';

function SwiperItemLayout({ item }: { item: SwiperItemType }) {
  return (
    <li className="grid lg:grid-cols-2 max-w-[73rem] pl-8 mx-auto md:grid-cols-1 sm:grid-cols-1 sm:mx-auto">
      <div className="flex flex-col items-start mt-2">
        {/* 버튼 */}
        <div className="hidden md:hidden lg:inline-block bg-gray-400 rounded-full md:max-w-[280px] px-4 py-5 text-md text-white self-start overflow-hidden text-ellipsis whitespace-nowrap">
          {item.buttonLabel}
        </div>

        {/* 제목 */}
        <h1 className="self-center text-3xl sm:self-center md:text-4xl lg:text-[65px] lg:self-start md:self-center line-clamp-2 font-bold mt-4 leading-snug">
          {item.title}
        </h1>

        {/* 콘텐츠 */}
        <p className="hidden md:mt-12 text-gray-500 md:text-xl md:self-start mt-4 lg:block line-clamp-3 overflow-hidden">
          {item.content}
        </p>

        {/* 버튼들 */}
        <div className="self-center sm:self-center flex gap-4 mt-14 mb-10 lg:self-start md:self-center">
          <button className="bg-[#FFD84D] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/90">
            Get Started
          </button>
          <button className="border-2 border-[#FFD84D] text-[#FFD84D] px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/10">
            Join For Free
          </button>
        </div>
      </div>

      {/* 이미지 */}
      <div className="self-center sm:self-center max-w-[400px] mx-auto h-auto sm:mx-auto md:mx-auto mr-4 md:max-w-[540px] md:h-[550px] mt-2">
        <FitImage
          src={item.src}
          alt={item.title}
          className="object-fill w-full h-full rounded-lg"
        />
      </div>
    </li>
  );
}

export default SwiperItemLayout;
