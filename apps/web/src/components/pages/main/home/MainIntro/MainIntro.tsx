'use client';
import { CommonLayout } from '@repo/web/components/common/commomLayout';
import { mainIntroDataType } from '@repo/web/components/types/home/homeResponseType';
import { useRef, useState } from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'; // Autoplay 모듈 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import SwiperIndex from './SwiperIndex';
import SwiperItemLayout from './SwiperItem';
export default function MainIntro({
  mainIntroDatas,
}: {
  mainIntroDatas: mainIntroDataType[];
}) {
  const [SlideIndex, setSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const onSlideIndexChange = (swiper: SwiperType) => {
    setSlideIndex(swiper.realIndex);
  };

  const handleIndexClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };
  return (
    <CommonLayout
      type="section"
      reative="container"
      className="mx-auto my-4 xl:max-w-[1180px] lg:max-w-[1024px] md:max-w-[768px]"
    >
      <Swiper
        loop
        slidesPerView={1}
        onSlideChange={onSlideIndexChange}
        spaceBetween={16}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay 설정
        modules={[Autoplay]} // Autoplay 모듈 등록
        onSwiper={(swiper) => {
          if (swiperRef.current) {
            swiperRef.current = swiper;
          }
        }}
      >
        {mainIntroDatas.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperItemLayout item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex my-10 justify-center">
        {mainIntroDatas.map((_, index) => (
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
