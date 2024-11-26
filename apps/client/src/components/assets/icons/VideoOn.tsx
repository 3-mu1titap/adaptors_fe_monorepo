import React from 'react';

export default function VideoOnIcon({ size = '20' }: { size?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.53 20.92H6.21C3.05 20.92 2 18.82 2 16.71V8.29C2 5.13 3.05 4.08 6.21 4.08H12.53C15.69 4.08 16.74 5.13 16.74 8.29V16.71C16.74 19.87 15.68 20.92 12.53 20.92Z"
        stroke="#0060FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.52 17.6L16.74 15.65V9.33999L19.52 7.38999C20.88 6.43999 22 7.01999 22 8.68999V16.31C22 17.98 20.88 18.56 19.52 17.6Z"
        stroke="#0060FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 11.5C12.3284 11.5 13 10.8284 13 10C13 9.17157 12.3284 8.5 11.5 8.5C10.6716 8.5 10 9.17157 10 10C10 10.8284 10.6716 11.5 11.5 11.5Z"
        stroke="#0060FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
