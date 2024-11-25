'use client';
import Heart from '@components/assets/icons/Heart';
import { cn } from '@repo/ui/lib/utils';
import { useState } from 'react';

interface SocialCounterProps {
  count: number;
  text?: string;
  className?: string;
}

export default function LikeButton({
  count,
  text = 'Is Good',
  className,
}: SocialCounterProps) {
  const [isLiked, setIsLiked] = useState(false);
  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };
  const handleLikeButton = () => {
    setIsLiked((prev) => !prev);
    //좋아요요청
  };

  return (
    <div className={cn('flex flex-row items-center gap-2', className)}>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9F9D9D]/15 shadow-sm"
        onClick={handleLikeButton}
      >
        <Heart isLiked={isLiked} />
      </div>
      <div className="flex flex-col items-center ">
        <span className="text-[1.15rem] font-semibold text-[#1a1a2e]">
          {formatCount(count)}
        </span>
        <span className="text-base text-gray-500 text-sm">{text}</span>
      </div>
    </div>
  );
}
