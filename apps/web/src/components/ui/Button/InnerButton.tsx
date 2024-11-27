function InnerButton({
  onClick,
  title,
  colorType,
  isDisabled,
}: {
  onClick: () => void;
  title: string;
  colorType: 'primary' | 'secondary';
  isDisabled: boolean;
}) {
  return (
    <button
      className={`absolute right-2 px-2 py-1 
        text-white text-[11px] font-medium rounded-[0.5rem] hover:bg-[#e5c340] transition-colors
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
