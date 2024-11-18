'use client';
import { useState } from 'react';
import SwiperItemLayout from './SwiperItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import SwiperIndex from './SwiperIndex';
import 'swiper/css';

export default function MainIntro() {
  const SwiperItem = [
    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링! 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링! 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링! 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링! 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },

    {
      buttonLabel: '[취업멘토] 아이돌 취업을 위한 첫걸음 멘토링',
      title: '방탄과 함께하는 아이돌 멘토링',
      content:
        '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링! 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
      src: '/assets/images/intro1.svg',
    },
  ];

  const [SlideIndex, setSlideIndex] = useState(0);

  const onSlideIndexChange = (swiper: SwiperType) => {
    setSlideIndex(swiper.realIndex);
  };

  return (
    <section className="container mx-auto px-44 mt-4 w-full justify-between">
      <ul>
        <Swiper
          loop={true}
          slidesPerView={1}
          onSlideChange={(swiper) => onSlideIndexChange(swiper)}
          spaceBetween={50}
        >
          {SwiperItem.map((item, index) => (
            <SwiperSlide key={index} className="p-0 m-0">
              <SwiperItemLayout item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>

      <div className="flex justify-center mt-4">
        {SwiperItem.map((_, index) => (
          <SwiperIndex slideIndex={SlideIndex} index={index} />
        ))}
      </div>
    </section>
  );
}
