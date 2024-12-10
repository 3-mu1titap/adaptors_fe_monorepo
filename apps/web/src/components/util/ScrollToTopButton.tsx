'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isView, setIsView] = useState(false);
  const handleTopToScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsView(true);
      } else {
        setIsView(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      onClick={handleTopToScroll}
      className={`
        flex items-center justify-center
      scroll-btn
      ${isView ? 'go-Up-view bottom-[8rem]' : 'go_Down-hide'}
      `}
      aria-label="scroll to top"
    >
      <ChevronUp
        size={24}
        strokeWidth={1.5}
        className={`${isView ? ' rotate-0' : ' rotate-180'} transition-all`}
      />
    </div>
  );
}

export default ScrollToTopButton;
