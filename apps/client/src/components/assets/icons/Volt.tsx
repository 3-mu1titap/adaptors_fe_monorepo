import React from 'react';

export default function VoltIcon({
  color,
  size = '28',
}: {
  color: boolean;
  size?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2222 14.4889L9.51111 21.6L18.7556 11.6445L13.7778 8.80002L14.4889 2.40002L5.24445 12.3556L10.2222 14.4889Z"
        stroke={`${color ? '#F6D84C' : '#ACACAC'}`}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
