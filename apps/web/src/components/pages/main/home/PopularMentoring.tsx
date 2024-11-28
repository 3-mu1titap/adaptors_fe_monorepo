'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import PopularCategoryMentoring from './PopularCategoryMentoring';
import InnerButton from '@components/ui/Button/InnerButton';
import { courses } from 'src/store/dummyStore';
import { CommonLayout } from '@components/common/commomLayout';
import TitleSection from '@components/common/TitleSection';

export default function PopularMentoring() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const data = [...courses, ...courses]; // 데이터 복제

  const handleMove = () => {
    console.log('direction:', direction);

    if (carouselRef.current && !isScrolling) {
      setIsScrolling(true);

      const clientWidth = carouselRef.current.clientWidth;
      if (direction === 'left') {
        carouselRef.current.scrollBy({
          left: -clientWidth,
          behavior: 'smooth',
        });
      } else {
        carouselRef.current.scrollBy({
          left: clientWidth,
          behavior: 'smooth',
        });
      }

      setTimeout(() => {
        // 스크롤 위치 재조정
        if (carouselRef.current) {
          const scrollWidth = carouselRef.current.scrollWidth;
          const scrollLeft = carouselRef.current.scrollLeft;

          if (scrollLeft <= 0) {
            // 왼쪽 끝에 도달하면 뒤로 이동
            carouselRef.current.scrollLeft = scrollWidth / 2;
          } else if (scrollLeft + clientWidth >= scrollWidth) {
            // 오른쪽 끝에 도달하면 앞으로 이동
            carouselRef.current.scrollLeft = scrollWidth / 2 - clientWidth;
          }
        }
        setIsScrolling(false);
      }, 300); // 애니메이션 시간 후 상태 초기화
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleMove();
    }, 3000); // 3초마다 자동 이동

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  return (
    <CommonLayout type={'section'} className="container mx-auto my-4 relative">
      <TitleSection title="인기멘토링" subtitle="POPULAR COURSES" />
      <button
        className="absolute left-0 translate-x-[-50%] top-1/2 z-10 bg-black rounded-full p-2 shadow-lg hidden md:flex items-center justify-center"
        aria-label="Scroll left"
        onClick={() => setDirection('left')}
      >
        <ChevronLeft className="h-6 w-6" color="white" />
      </button>
      <button
        className="absolute right-0 translate-x-[50%] top-1/2 z-10 bg-black rounded-full p-2 shadow-lg hidden lg:flex items-center justify-center"
        aria-label="Scroll right"
        onClick={() => setDirection('right')}
      >
        <ChevronRight className="h-6 w-6" color="white" />
      </button>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll no-scrollbar pb-4 relative"
        onScroll={() => {
          if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth;
            const clientWidth = carouselRef.current.clientWidth;
            const scrollLeft = carouselRef.current.scrollLeft;

            // 스크롤 위치가 시작 또는 끝에 도달했을 때 재조정
            if (scrollLeft <= 0) {
              carouselRef.current.scrollLeft = scrollWidth / 2;
            } else if (scrollLeft + clientWidth >= scrollWidth) {
              carouselRef.current.scrollLeft = scrollWidth / 2 - clientWidth;
            }
          }
        }}
      >
        {data.map((category, index) => (
          <div
            key={index}
            className="flex-none w-1/4"
            style={{ scrollSnapAlign: 'start' }}
          >
            <PopularCategoryMentoring item={category} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <InnerButton
          title="전체멘토링"
          onClick={() => console.log('전체멘토링')}
          colorType={'primary'}
          isDisabled={false}
          className=""
        />
      </div>
    </CommonLayout>
  );
}
