'use client';
import Heart from '@components/assets/icons/Heart';
import { cn } from '@repo/ui/lib/utils';
import { useState } from 'react';
import { postLikeReaction } from 'src/actions/Like/like';
import ValueUnit from '../Text/ValueUnit';

interface SocialCounterProps {
  count: number;
  text?: string;
  className?: string;
  mentorUuid: string;
}

export default function LikeButton({
  count,
  text = 'Is Good',
  className,
  mentorUuid,
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
    postLikeReaction(mentorUuid);
  };

  return (
    <div className={cn('flex flex-row items-center gap-2', className)}>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9F9D9D]/15 shadow-sm"
        onClick={handleLikeButton}
      >
        <Heart isLiked={isLiked} />
      </div>
      <ValueUnit
        value={`${formatCount(count)}`}
        unit="Reviews"
        valueSize="text-[1.15rem]"
        unitSize="text-sm"
      />
    </div>
  );
}
