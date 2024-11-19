export default function ContainerIcon({ color }: { color?: boolean }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_54396_617)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 16V14H29V16H11ZM11 21H29V19H11V21ZM11 26H29V24H11V26Z"
          fill={`${color ? '#0060FF' : '#ACACAC'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_54396_617">
          <rect
            width="40"
            height="40"
            rx="20"
            fill={`${color ? '#0060FF' : '#ACACAC'}`}
          />
        </clipPath>
      </defs>
    </svg>
  );
}
