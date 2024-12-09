import React from 'react';

export default function ArrowLeftIcon({ color }: { color?: boolean }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 19H15.83L21.42 13.41L20 12L12 20L20 28L21.41 26.59L15.83 21H28V19Z"
        fill={`${color ? '#0060FF' : '#ACACAC'}`}
      />
    </svg>
  );
}
