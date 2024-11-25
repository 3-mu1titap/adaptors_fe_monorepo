export default function Heart({ isLiked = false }: { isLiked: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={isLiked ? '#none' : '#717171'}
    >
      <path
        d="M23.9753 4.52075C21.3357 4.52075 18.9732 5.80409 17.5003 7.77284C16.0274 5.80409 13.6649 4.52075 11.0253 4.52075C6.54824 4.52075 2.91699 8.16658 2.91699 12.6728C2.91699 14.4083 3.19408 16.0124 3.67533 17.4999C5.97949 24.7916 13.0816 29.152 16.5962 30.3478C17.092 30.5228 17.9087 30.5228 18.4045 30.3478C21.9191 29.152 29.0212 24.7916 31.3253 17.4999C31.8066 16.0124 32.0837 14.4083 32.0837 12.6728C32.0837 8.16658 28.4524 4.52075 23.9753 4.52075Z"
        fill={isLiked ? '#FF3D3A' : 'none'}
      />
    </svg>
  );
}
