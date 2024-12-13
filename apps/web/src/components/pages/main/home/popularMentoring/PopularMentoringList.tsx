'use client';
import { Skeleton } from '@repo/ui/components/ui/skeleton';
import { cn } from '@repo/ui/lib/utils';
import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import { GetPopularMentoringList } from '@repo/web/actions/mentoring/mentoringAction';
import { CommonLayout } from '@repo/web/components/common/commomLayout';
import TitleSection from '@repo/web/components/common/TitleSection';
import { Mentoring } from '@repo/web/components/types/mentoring/mentoringTypes';
import InnerButton from '@repo/web/components/ui/Button/InnerButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useSession } from 'src/app/context/SessionContext';
import { courses } from 'src/store/dummyStore';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules'; // Autoplay, Navigation 모듈 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';
import MentoringItem from '../../mentoring/MentoringItem';
import SwiperIndex from '../MainIntro/SwiperIndex';
function PopularMentoringList({
  categoryData,
}: {
  categoryData: TopCategoryType[];
}) {
  const swiperRef = useRef<any>(null); // Swiper 인스턴스를 참조하기 위한 ref
  const [SlideIndex, setSlideIndex] = useState(0);

  const [popularData, setPopularData] = useState<Mentoring[]>([]); // 선택된 카테고리 데이터
  const [categories, setCategories] = useState<TopCategoryType[]>(categoryData);
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // 현재 활성 카테고리
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

  // 카테고리 데이터 가져오기
  const fetchCategoryData = async (categoryType: string) => {
    try {
      const res = await GetPopularMentoringList(categoryType);
      setPopularData(res || []);
      // console.log(res, '카테고리로 인기 멘토링 데이터 불러오기');
    } catch (error) {
      // console.error('Error fetching category data:', error);
    }
  };

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (categoryType: string) => {
    setActiveCategory(categoryType); // 활성 카테고리 설정
    fetchCategoryData(categoryType); // 데이터 가져오기
  };

  // 초기 로딩 시 첫 번째 카테고리 데이터 가져오기
  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      const initialCategory = categories[0].topCategoryCode;
      setActiveCategory(initialCategory);
      fetchCategoryData(initialCategory);
    }
  }, [categories, activeCategory]);

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
            className={cn(
              'mr-2 mb-2 opacity-80',
              activeCategory === category.topCategoryCode && 'bg-yellow-400'
            )}
            title={category.topCategoryName}
            onClick={() => handleCategoryClick(category.topCategoryCode)}
            colorType="secondary"
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
        {popularData.slice(0, 20).map((item, index) => (
          <SwiperSlide key={index}>
            <Suspense fallback={<Skeleton className="w-[200px] h-[500px]" />}>
              <MentoringItem
                item={item}
                isLoading={popularData ? false : true}
              />
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex my-10 justify-center">
        {popularData.slice(0, 20).map((_, index) => (
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
