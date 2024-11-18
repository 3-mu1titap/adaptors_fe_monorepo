import React from 'react';
import FitImage from '../../../../ui/image/fit-image';
import { SwiperItemType } from '../../../../types/swiper/SwiperType';
function SwiperItemLayout({ item }: { item: SwiperItemType }) {
  return (
    <li className="grid md:grid-cols-2 gap-12">
      <div className="space-y-4 my-6 md:flex-col">
        <div className="inline-block bg-gray-400 rounded-full px-4 py-3 mt-3 text-sm text-white">
          [취업멘토] 아이돌 취업을 위한 첫걸음 멘토링
        </div>
        <h1 className="text-4xl md:text-bigSize font-bold leading-tight py-8">
          방탄과 함께하는
          <br />
          아이돌 멘토링
        </h1>
        <p className="text-gray-500 leading-relaxed py-2 md:text-lg break-words ">
          무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지
          메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을
          제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링!
          데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어
          드립니다.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="bg-[#FFD84D] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/90">
            Get Started
          </button>
          <button className="border-2 border-[#FFD84D] text-[#FFD84D] px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/10">
            Joint For Free
          </button>
        </div>
      </div>

      <div className="md:w-[500px] h-[500px] mt-6">
        <div className="">
          <FitImage
            src="/assets/images/intro1.svg"
            alt="인트로1 이미지"
            className="pb-4"
          />
        </div>
      </div>
    </li>
  );
}

export default SwiperItemLayout;
