interface LightningScoreProps {
  score: number;
  maxScore?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  className?: string;
}

export default function Score({
  score,
  maxScore = 5,
  fillColor = '#FFD700',
  strokeColor = 'black',
  size = 45,
  className = '',
}: LightningScoreProps) {
  const normalizedScore = Math.min(Math.max(score, 0), maxScore);

  return (
    <div className={`flex-2 ${className} md:mx-auto`}>
      <svg
        width={100}
        height={100}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="lightning-mask">
            <path
              d="M35.8066 20.7875L22.671 39.9752C22.0093 40.9287 20.4525 40.5006 20.4525 39.3524L20.4331 28.3769C20.4331 27.112 19.3628 26.1001 18.0395 26.0806L10.197 25.9834C9.2435 25.9639 8.67917 24.9714 9.20459 24.2125L22.3402 5.0248C23.0018 4.07126 24.5586 4.4994 24.5586 5.64754L24.5781 16.6231C24.5781 17.888 25.6484 18.8999 26.9717 18.9193L34.8141 19.0166C35.7482 19.0166 36.3125 20.0286 35.8066 20.7875Z"
              fill="white"
            />
          </mask>
        </defs>

        {/* White background */}
        <path
          d="M35.8066 20.7875L22.671 39.9752C22.0093 40.9287 20.4525 40.5006 20.4525 39.3524L20.4331 28.3769C20.4331 27.112 19.3628 26.1001 18.0395 26.0806L10.197 25.9834C9.2435 25.9639 8.67917 24.9714 9.20459 24.2125L22.3402 5.0248C23.0018 4.07126 24.5586 4.4994 24.5586 5.64754L24.5781 16.6231C24.5781 17.888 25.6484 18.8999 26.9717 18.9193L34.8141 19.0166C35.7482 19.0166 36.3125 20.0286 35.8066 20.7875Z"
          fill="white"
        />

        {/* Filled part */}
        <g mask="url(#lightning-mask)">
          <rect
            x="0"
            y={45 * (1 - normalizedScore / maxScore)}
            width="45"
            height={45 * (normalizedScore / maxScore)}
            fill={fillColor}
          />
        </g>

        {/* Stroke */}
        <path
          d="M35.8066 20.7875L22.671 39.9752C22.0093 40.9287 20.4525 40.5006 20.4525 39.3524L20.4331 28.3769C20.4331 27.112 19.3628 26.1001 18.0395 26.0806L10.197 25.9834C9.2435 25.9639 8.67917 24.9714 9.20459 24.2125L22.3402 5.0248C23.0018 4.07126 24.5586 4.4994 24.5586 5.64754L24.5781 16.6231C24.5781 17.888 25.6484 18.8999 26.9717 18.9193L34.8141 19.0166C35.7482 19.0166 36.3125 20.0286 35.8066 20.7875Z"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
