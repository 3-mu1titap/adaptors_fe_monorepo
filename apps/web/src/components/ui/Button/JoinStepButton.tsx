interface JoinStepButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text?: string;
  className?: string;
}

export default function JoinStepButton({
  onClick,
  disabled,
  text,
  className = 'text-white',
}: JoinStepButtonProps) {
  return (
    <button
      type="button"
      className={`
        w-full px-4 py-2 mt-3 bg-[#F8D448] rounded-[0.5rem] hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448] z-20 font-bold  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text ? text : '다음'}
    </button>
  );
}
