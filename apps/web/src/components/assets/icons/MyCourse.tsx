import React from 'react';

export default function MyCourseIcon({
  color,
  size = '28',
}: {
  color?: boolean;
  size?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8334 24.5V22.1667C19.8334 20.929 19.3417 19.742 18.4665 18.8668C17.5913 17.9917 16.4044 17.5 15.1667 17.5H5.83335C4.59568 17.5 3.40869 17.9917 2.53352 18.8668C1.65835 19.742 1.16669 20.929 1.16669 22.1667V24.5"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 12.8333C13.0773 12.8333 15.1666 10.744 15.1666 8.16667C15.1666 5.58934 13.0773 3.5 10.5 3.5C7.92265 3.5 5.83331 5.58934 5.83331 8.16667C5.83331 10.744 7.92265 12.8333 10.5 12.8333Z"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.8333 24.5V22.1667C26.8325 21.1327 26.4884 20.1282 25.8549 19.311C25.2214 18.4938 24.3345 17.9102 23.3333 17.6517"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 3.65167C19.6705 3.90869 20.5602 4.49249 21.1956 5.31103C21.831 6.12958 22.1758 7.13631 22.1758 8.17251C22.1758 9.2087 21.831 10.2154 21.1956 11.034C20.5602 11.8525 19.6705 12.4363 18.6667 12.6933"
        stroke={`${color ? '#0060FF' : '#ACACAC'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
