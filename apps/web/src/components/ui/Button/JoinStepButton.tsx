interface JoinStepButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text?: string;
}

export default function JoinStepButton({
  onClick,
  disabled,
  text,
}: JoinStepButtonProps) {
  return (
    <button
      type="button"
      className="w-full px-4 py-2 mt-3 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448] z-10"
      onClick={onClick}
      disabled={disabled}
    >
      {text ? text : '다음'}
    </button>
  );
}
