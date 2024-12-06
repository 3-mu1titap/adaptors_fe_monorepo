'use client';
import { useEffect, useState } from 'react';
// import './FlipAnimation.css'; // CSS 파일 import
const FlipUnit = ({ value }: { value: number }) => {
  const [previous, setPrevious] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);
  useEffect(() => {
    if (previous !== value) {
      setIsFlipping(true);
      const timeout = setTimeout(() => {
        setPrevious(value);
        setIsFlipping(false);
      }, 500); // 애니메이션 시간과 일치
      return () => clearTimeout(timeout);
    }
  }, [value, previous]);
  return (
    <ul className={`flip ${isFlipping ? 'play' : ''}`}>
      <li className="before">
        <a>
          <div className="up">
            <div className="inn">{previous}</div>
          </div>
          <div className="down">
            <div className="inn">{previous}</div>
          </div>
        </a>
      </li>
      <li className="active">
        <a>
          <div className="up">
            <div className="inn">{value}</div>
          </div>
          <div className="down">
            <div className="inn">{value}</div>
          </div>
        </a>
      </li>
    </ul>
  );
};
const CustomNowDate = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setSeconds(now.getSeconds());
      setMinutes(now.getMinutes());
      setHours(now.getHours());
    }, 1000); // 1초마다 업데이트
    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 정리
  }, []);
  return (
    <div className="flip-wrapper flex gap-1 items-center justify-center py-2">
      <FlipUnit value={hours % 12 || 12} /> {/* 12시간제 */}
      <FlipUnit value={minutes} />
      <FlipUnit value={seconds} />
    </div>
  );
};
export default CustomNowDate;
