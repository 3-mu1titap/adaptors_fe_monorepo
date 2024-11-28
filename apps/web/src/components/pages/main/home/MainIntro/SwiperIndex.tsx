function SwiperIndex({
  slideIndex,
  index,
  onClick,
}: {
  slideIndex: number;
  index: number;
  onClick: () => void;
}) {
  return (
    <span
      key={index}
      className={`rounded-full w-1 h-1 mx-[0.2rem] ${
        slideIndex === index
          ? 'bg-yellow-500 scale-[300%] transition-all mx-[0.4rem]'
          : 'bg-gray-300 transition-all'
      }`}
      onClick={onClick}
    />
  );
}

export default SwiperIndex;
