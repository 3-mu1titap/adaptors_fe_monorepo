export default function Thunder({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 1.25C5.08579 1.25 4.75 1.58579 4.75 2V13C4.75 13.4142 5.08579 13.75 5.5 13.75H8.75V22C8.75 22.3281 8.96323 22.6181 9.27637 22.7159C9.58952 22.8137 9.9299 22.6966 10.1166 22.4269L19.1166 9.42691C19.2754 9.19755 19.2938 8.89902 19.1643 8.65192C19.0349 8.40482 18.779 8.25 18.5 8.25H15.3648L16.2425 2.10607C16.2732 1.89083 16.209 1.67285 16.0666 1.5086C15.9241 1.34435 15.7174 1.25 15.5 1.25H5.5Z"
        fill="#FFC44D"
      />
    </svg>
  );
}
