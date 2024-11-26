import React from 'react';

export default function CalendarIcon({ color }: { color?: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4.35294"
        width="20"
        height="21.1765"
        rx="2"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4445 2V6.70588"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.55556 2V6.70588"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11.4118H24"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
