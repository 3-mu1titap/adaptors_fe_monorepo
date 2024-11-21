'use client';
import { useState } from 'react';
import SwiperItemLayout from './SwiperItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import SwiperIndex from './SwiperIndex';
import 'swiper/css';
import { CommonLayout } from '@components/common/commomLayout';

export default function MainIntro() {
  const SwiperItem = [
    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '텍스트 멘토링',
      title: 'fafafafafaf',
      content: '텍스트121314',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },
  ];

  const [SlideIndex, setSlideIndex] = useState(0);

  const onSlideIndexChange = (swiper: SwiperType) => {
    setSlideIndex(swiper.realIndex);
  };

  return (
    <CommonLayout
      type="session"
      reative="container"
      className="max-w-[80rem] mx-auto"
    >
      <div className="flex flex-col">
        <div>
          <Swiper
            loop
            slidesPerView={1}
            onSlideChange={onSlideIndexChange}
            spaceBetween={16} // 간격을 모바일 친화적으로 조정
          >
            {SwiperItem.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperItemLayout item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex mt-12 justify-center">
          {SwiperItem.map((_, index) => (
            <SwiperIndex key={index} slideIndex={SlideIndex} index={index} />
          ))}
        </div>
      </div>
    </CommonLayout>
  );
}
