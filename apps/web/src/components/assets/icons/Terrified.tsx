export default function Terrified({
  className,
  color = '#DFEBFF',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_14)">
        <path
          d="M7 13.5C8.72391 13.5 10.3772 12.8152 11.5962 11.5962C12.8152 10.3772 13.5 8.72391 13.5 7C13.5 5.27609 12.8152 3.62279 11.5962 2.40381C10.3772 1.18482 8.72391 0.5 7 0.5C5.27609 0.5 3.62279 1.18482 2.40381 2.40381C1.18482 3.62279 0.5 5.27609 0.5 7C0.5 8.72391 1.18482 10.3772 2.40381 11.5962C3.62279 12.8152 5.27609 13.5 7 13.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 4L8.5 5.5L10.5 6.5M3.5 4L5.5 5.5L3.5 6.5M4.5 10C4.5 10 6 7.5 7 7.5C8 7.5 9.5 10 9.5 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_14">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
