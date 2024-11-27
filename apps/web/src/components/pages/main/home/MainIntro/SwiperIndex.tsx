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
      className={`rounded-full w-2 h-2 mx-[0.2rem] ${
        slideIndex === index
          ? 'bg-yellow-500 scale-150 transition-all'
          : 'bg-gray-300 transition-all'
      }`}
      onClick={onClick}
    />
  );
}

export default SwiperIndex;
