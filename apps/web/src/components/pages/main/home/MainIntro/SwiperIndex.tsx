import React from 'react';

function SwiperIndex({
  slideIndex,
  index,
}: {
  slideIndex: number;
  index: number;
}) {
  return (
    <span
      key={index}
      className={`rounded-full w-4 h-4 mx-1 ${
        slideIndex === index ? 'bg-yellow-500' : 'bg-gray-700'
      }`}
    />
  );
}

export default SwiperIndex;
