'use client';
import { cn } from '@repo/ui/lib/utils';
import { HeartIcon } from 'lucide-react';
import CustomValueUnit from './CustomValueUnit';

interface SocialCounterProps {
  isCheck?: boolean;
  handler?: () => void;
  count: number;
  text?: string;
  className?: string;
}
export default function CustomLikeButton({
  handler,
  isCheck = true,
  count,
  text = 'Is Good',
  className,
}: SocialCounterProps) {
  return (
    <div className={cn('flex flex-row items-center gap-1', className)}>
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9F9D9D]/15 shadow-sm cursor-pointer"
        onClick={handler}
      >
        <HeartIcon
          size={24}
          className={cn(
            isCheck ? 'fill-red-500 text-red-500' : 'fill-white text-white'
          )}
        />
      </div>
      <CustomValueUnit
        value={count}
        unit="likes"
        valueSize="text-[1.09rem]"
        unitSize="text-sm"
      />
    </div>
  );
}
