import React from 'react';

function SocialIcon({ className }: { className?: string }) {
  return (
    <svg
      width="7"
      height="9"
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-3 h-3 ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.49999 4.95962C4.57387 4.95962 5.44443 4.07323 5.44443 2.97981C5.44443 1.88639 4.57387 1 3.49999 1C2.4261 1 1.55554 1.88639 1.55554 2.97981C1.55554 4.07323 2.4261 4.95962 3.49999 4.95962Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8.00003C5.50758 7.12959 4.54638 6.58588 3.5 6.58588C2.45362 6.58588 1.49242 7.12959 1 8.00003"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SocialIcon;
