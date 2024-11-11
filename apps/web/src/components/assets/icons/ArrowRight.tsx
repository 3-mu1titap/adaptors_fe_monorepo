import React from 'react';

export default function ArrowRightIcon({ color }: { color?: boolean }) {
  return (
    <svg
      width="35"
      height="36"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.81665"
        width="35"
        height="35"
        rx="5"
        fill={color ? 'white' : 'black'}
      />
      <g transform="translate(10, 10)">
        <path
          d="M13.7071 8.52376C14.0976 8.13323 14.0976 7.50007 13.7071 7.10954L7.34315 0.745583C6.95262 0.355058 6.31946 0.355058 5.92893 0.745583C5.53841 1.13611 5.53841 1.76927 5.92893 2.1598L11.5858 7.81665L5.92893 13.4735C5.53841 13.864 5.53841 14.4972 5.92893 14.8877C6.31946 15.2782 6.95262 15.2782 7.34315 14.8877L13.7071 8.52376ZM0 8.81665H13V6.81665H0V8.81665Z"
          fill={color ? '#F6D84C' : 'white'}
        />
      </g>
    </svg>
  );
}
