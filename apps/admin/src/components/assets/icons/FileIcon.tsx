import React from 'react';

export default function FileIcon({
  color,
  size = '24',
}: {
  color: string;
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
        d="M11.7722 3.74407C14.1136 1.40049 17.9126 1.40049 20.2558 3.74363C22.5388 6.0267 22.5974 9.69191 20.4314 12.0458L20.2432 12.2432L11.4432 21.0414L11.4066 21.0717C9.94541 22.3884 7.69141 22.3437 6.28404 20.9363C4.96502 19.6173 4.8429 17.5546 5.91769 16.0979C5.94103 16.0525 5.96928 16.0088 6.00249 15.9677L6.05605 15.908L6.14295 15.8203L6.28404 15.6724L6.28695 15.6753L13.7227 8.22096C13.9886 7.95434 14.4052 7.92958 14.6991 8.14704L14.7834 8.21955C15.05 8.48546 15.0747 8.90209 14.8573 9.19599L14.7848 9.28021L7.19015 16.8933C6.47251 17.7689 6.52239 19.0632 7.33979 19.8806C8.16885 20.7096 9.4885 20.7491 10.3643 19.999L19.197 11.1685C20.9525 9.41089 20.9525 6.56165 19.1951 4.80429C17.4927 3.10185 14.7655 3.04865 12.999 4.64469L12.8312 4.80429L12.8186 4.8186L3.28228 14.3549C2.98939 14.6478 2.51452 14.6478 2.22162 14.3549C1.95536 14.0887 1.93115 13.672 2.149 13.3784L2.22162 13.2943L11.7705 3.74363L11.7722 3.74407Z"
        fill={color}
      />
    </svg>
  );
}
