export default function Smile({
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
      <g clipPath="url(#clip0_1_28)">
        <path
          d="M7 13.5C8.72391 13.5 10.3772 12.8152 11.5962 11.5962C12.8152 10.3772 13.5 8.72391 13.5 7C13.5 5.27609 12.8152 3.62279 11.5962 2.40381C10.3772 1.18482 8.72391 0.5 7 0.5C5.27609 0.5 3.62279 1.18482 2.40381 2.40381C1.18482 3.62279 0.5 5.27609 0.5 7C0.5 8.72391 1.18482 10.3772 2.40381 11.5962C3.62279 12.8152 5.27609 13.5 7 13.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.09798 2.90199L7.54998 4.94999L9.28198 3.94999M2.90198 5.90199L4.95098 6.45099L3.21898 7.45099M8.99998 10.464C9.80356 9.99985 10.3899 9.23558 10.6301 8.33921C10.8704 7.44285 10.7448 6.48778 10.281 5.68399L4.21898 9.18399C4.68346 9.98751 5.44806 10.5736 6.34464 10.8135C7.24121 11.0533 8.19634 10.9283 8.99998 10.464Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_28">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
