import React, { ReactNode, useEffect, useRef, useState } from 'react';
interface TooltipProps {
  text: string; // 툴팁 텍스트
  children: ReactNode; // 툴팁이 감싸는 자식 요소
}
export function Tooltip({ text, children }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isHovered && tooltipRef.current && wrapperRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const styles: React.CSSProperties = {};
      // 수평 경계 검사
      if (tooltipRect.right > viewportWidth) {
        styles.right = 0;
      } else if (tooltipRect.left < 0) {
        styles.left = 0;
      }
      // 수직 경계 검사
      if (tooltipRect.bottom > viewportHeight) {
        styles.top = 'auto';
        styles.bottom = `${wrapperRect.height}px`;
      }
      setTooltipStyle(styles);
    }
  }, [isHovered]);
  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div
        ref={tooltipRef}
        className={`absolute top-full left-1/2 translate-x-[-50%] mt-2 px-3 py-1 bg-black text-white text-sm rounded shadow-lg z-10 transition-all duration-300 ${
          isHovered
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{
          whiteSpace: 'nowrap',
          ...tooltipStyle,
        }}
      >
        {text}
      </div>
    </div>
  );
}
