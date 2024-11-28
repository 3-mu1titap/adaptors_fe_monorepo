'use client';
import React, { useRef, useState } from 'react';
import 'swiper/css';

import { cn } from '@repo/ui/lib/utils';
import { CommonLayout } from '@components/common/commomLayout';
import { categories, courses } from 'src/store/dummyStore';
import { Autoplay, Navigation } from 'swiper/modules'; // Autoplay, Navigation 모듈 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import PopularCategoryMentoring from '../PopularCategoryMentoring';
import SwiperIndex from '../MainIntro/SwiperIndex';
import TitleSection from '@components/common/TitleSection';
import InnerButton from '@components/ui/Button/InnerButton';

function PopularMentoringList() {
  const data = courses; // 데이터 복제
  const swiperRef = useRef<any>(null); // Swiper 인스턴스를 참조하기 위한 ref
  const [SlideIndex, setSlideIndex] = useState(0);

  const onSlideIndexChange = (swiper: any) => {
    setSlideIndex(swiper.realIndex);
  };

  const handleIndexClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // 이전 슬라이드로 이동
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // 다음 슬라이드로 이동
    }
  };

  return (
    <CommonLayout
      type="section"
      reative="container"
      className="mx-auto my-4 px-4 md:px-8 xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[90%] relative"
    >
      <TitleSection title="인기멘토링" subtitle="POPULAR COURSES" />
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {categories.map((category, index) => (
          <InnerButton
            key={index}
            className="mr-2 mb-2 opacity-80"
            title={category.icon + ' ' + category.name}
            onClick={() => console.log('click')}
            colorType={'secondary'}
            isDisabled={false}
          />
        ))}
      </div>
      {/* 좌측 버튼 */}
      <div
        className={cn(
          'absolute left-0 translate-x-[-50%] top-1/2 z-10',
          'bg-black rounded-full p-2',
          'shadow-lg hidden md:flex',
          'items-center justify-center',
          'hover:bg-yellow-400 cursor-pointer',
          'transition-all duration-200 ease-in-out'
        )}
        aria-label="Scroll left"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-6 w-6" color="white" />
      </div>
      {/* 우측 버튼 */}
      <div
        className={cn(
          'absolute right-0 translate-x-[50%] top-1/2 z-11',
          'bg-black rounded-full p-2',
          'shadow-lg hidden md:flex',
          'items-center justify-center cursor-pointer',
          'hover:bg-yellow-400',
          'transition-all duration-200 ease-in-out'
        )}
        aria-label="Scroll right"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" color="white" />
      </div>
      <Swiper
        loop
        onSlideChange={onSlideIndexChange}
        spaceBetween={8}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }} // 네비게이션 버튼 연결
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper; // Swiper 인스턴스 참조 설정
        }}
        onSwiper={(swiper) => {
          if (swiperRef.current) {
            swiperRef.current = swiper;
          }
        }}
        modules={[Autoplay, Navigation]} // Autoplay와 Navigation 모듈 활성화
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1140: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((category, index) => (
          <SwiperSlide key={index}>
            <PopularCategoryMentoring item={category} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex my-10 justify-center">
        {data.map((_, index) => (
          <SwiperIndex
            key={index}
            slideIndex={SlideIndex}
            index={index}
            onClick={() => handleIndexClick(index)}
          />
        ))}
      </div>
    </CommonLayout>
  );
}

export default PopularMentoringList;
