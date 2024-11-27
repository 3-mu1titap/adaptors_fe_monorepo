interface JoinStepButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  colorType?: 'primary' | 'secondary';
  textColor?: 'text-white' | 'text-black';
  text?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
export default function NextButton({
  onClick,
  disabled,
  text,
  colorType = 'primary',
  textColor = 'text-white',
  className,
  type = 'button',
}: JoinStepButtonProps) {
  return (
    <button
      type={type}
      className={`
        w-full px-4 py-3 mt-3
      ${colorType === 'primary' ? 'bg-[#F8D448] hover:bg-[#e5c340] focus:ring-[#F8D448]' : 'bg-[#111111] hover:bg-[#000000] focus:ring-[#111111]'}
        ${textColor}
        rounded-[0.5rem]  focus:outline-none focus:ring-2  z-20 font-bold  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text ? text : '다음'}
    </button>
  );
}
