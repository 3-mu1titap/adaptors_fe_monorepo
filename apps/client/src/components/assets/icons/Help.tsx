import React from 'react';

export default function HelpIcon({ color }: { color: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 25.6667C20.4433 25.6667 25.6666 20.4433 25.6666 14C25.6666 7.55668 20.4433 2.33333 14 2.33333C7.55666 2.33333 2.33331 7.55668 2.33331 14C2.33331 20.4433 7.55666 25.6667 14 25.6667Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18.6667V14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.33333H14.0117"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
