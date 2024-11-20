export default function DottedlineEllipse({
  className = '',
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="#FACE00"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-dasharray="2 4"
      />
    </svg>
  );
}