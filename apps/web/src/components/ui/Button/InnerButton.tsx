function InnerButton({
  onClick,
  title,
  colorType,
  isDisabled,
  className,
}: {
  onClick: (() => void) | ((category: string) => void);
  title: string;
  colorType: 'primary' | 'secondary';
  isDisabled: boolean;
  className?: string;
}) {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      if (onClick.length === 0) {
        // 매개변수를 받지 않는 경우
        (onClick as () => void)();
      } else {
        // 매개변수를 받는 경우
        (onClick as (category: string) => void)('default-category');
      }
    }
  };

  return (
    <button
      className={` 
          py-2 px-4
          text-white text-[11px] font-medium rounded-[0.5rem] hover:bg-[#e5c340] transition-colors
          ${className}
          ${colorType === 'primary' ? 'bg-[#F8D448]' : 'bg-[#111111]'}
          ${isDisabled ? 'bg-gray-300 cursor-not-allowed opacity-30' : ''}
        `}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
}

export default InnerButton;
