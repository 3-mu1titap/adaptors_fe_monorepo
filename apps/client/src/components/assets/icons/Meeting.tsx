import React from 'react';

export default function MeetingIcon({ color }: { color: string }) {
  return (
    <svg
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_279_135)">
        <g clipPath="url(#clip1_279_135)">
          <path
            d="M27.3334 8.16666L19.1667 14L27.3334 19.8333V8.16666Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M16.8334 5.83334H4.00002C2.71136 5.83334 1.66669 6.87801 1.66669 8.16668V19.8333C1.66669 21.122 2.71136 22.1667 4.00002 22.1667H16.8334C18.122 22.1667 19.1667 21.122 19.1667 19.8333V8.16668C19.1667 6.87801 18.122 5.83334 16.8334 5.83334Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_279_135">
          <rect fill="white" height="28" width="28" />
        </clipPath>
        <clipPath id="clip1_279_135">
          <rect
            fill="white"
            height="28"
            transform="translate(0.5)"
            width="28"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
