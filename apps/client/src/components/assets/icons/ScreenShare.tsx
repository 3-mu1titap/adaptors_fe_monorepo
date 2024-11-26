import React from 'react';

export default function ScreenShareIcon({
  color = '#0060FF',
}: {
  color: string;
}) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 25.6666H17.5C23.3333 25.6666 25.6667 23.3333 25.6667 17.5V10.5C25.6667 4.66665 23.3333 2.33331 17.5 2.33331H10.5C4.66667 2.33331 2.33334 4.66665 2.33334 10.5V17.5C2.33334 23.3333 4.66667 25.6666 10.5 25.6666Z"
        stroke={color}
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 11.095L14 7.59503L17.5 11.095"
        stroke={color}
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 7.59503V16.9284"
        stroke={color}
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 19.2617C11.5383 20.7783 16.4617 20.7783 21 19.2617"
        stroke={color}
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
