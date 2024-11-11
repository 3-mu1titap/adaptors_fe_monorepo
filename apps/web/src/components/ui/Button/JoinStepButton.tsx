interface JoinStepButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function JoinStepButton({
  onClick,
  disabled,
}: JoinStepButtonProps) {
  return (
    <button
      type="button"
      className="w-full px-4 py-2 mt-3 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
      onClick={onClick}
      disabled={disabled}
    >
      다음
    </button>
  );
}
