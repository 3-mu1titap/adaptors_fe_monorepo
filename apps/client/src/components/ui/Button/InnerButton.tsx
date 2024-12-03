function InnerButton({
  onClick,
  title,
  colorType,
  isDisabled,
  className,
}: {
  onClick: () => void;
  title: string;
  colorType: 'primary' | 'secondary';
  isDisabled: boolean;
  className?: string;
}) {
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
      onClick={onClick}
    >
      {title}
    </button>
  );
}
export default InnerButton;
