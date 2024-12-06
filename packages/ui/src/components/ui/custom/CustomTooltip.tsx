'use client';

import React, { ReactNode, useRef, useState } from 'react';

interface TooltipProps {
  text: string; // 툴팁 텍스트
  children: ReactNode; // 툴팁이 감싸는 자식 요소
}

export function CustomToolTip({ text, children }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const offsetX = e.clientX - wrapperRect.left;
      const offsetY = e.clientY - wrapperRect.top;
      setTooltipStyle({
        top: `${offsetY + 30}px`, // 마우스 포인터 아래에 표시
        left: `${offsetX + 30}px`, // 마우스 포인터 오른쪽에 표시
        transform: 'translate(-60%, -60%)',
      });
    }
  };
  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove} // 마우스 움직임 추적
    >
      {children}
      {isHovered && (
        <div
          className="absolute px-3 py-1 bg-black text-white text-sm rounded shadow-lg z-10 transition-opacity duration-300"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            ...tooltipStyle,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}
