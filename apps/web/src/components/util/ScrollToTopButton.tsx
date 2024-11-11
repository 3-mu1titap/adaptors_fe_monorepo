'use client';

import React, { useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

function ScrollToTopButton() {
  const [isTop, setIsTop] = React.useState(true);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white bg-opacity-90 fixed bottom-[75px] right-4 z-10 p-3 rounded-full ${isTop && 'hidden'}`}
      onClick={handleClick}
    >
      <ChevronUp
        size={24}
        strokeWidth={1}
        className={`${isTop ? ' rotate-180' : ' rotate-0'} transition-all`}
      />
    </div>
  );
}

export default ScrollToTopButton;
