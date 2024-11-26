'use client';

import { useEffect } from 'react';

function ScrollHandler({
  scrollY,
  selectedDate,
}: {
  scrollY: string;
  selectedDate: string;
}) {
  useEffect(() => {
    const scrollYValue = parseInt(scrollY, 10);
    if (!isNaN(scrollYValue)) {
      window.scrollTo({
        top: scrollYValue, // 스크롤 위치
        behavior: 'smooth', // 부드러운 스크롤
      });
    }
  }, [selectedDate]);

  return null; // 렌더링할 UI 없음
}

export default ScrollHandler;
