import { cn } from '@repo/ui/lib/utils';

interface CommonProps {
  className?: string;
  children: React.ReactNode;
}

const leftStyle = cn(
  'w-full lg:w-1/3 xl:w-1/4 flex-col justify-start items-start'
);

const rightStyle = cn('w-full lg:w-2/3 xl:w-3/4 space-y-2');

function LeftSide({ children, className }: CommonProps) {
  return <div className={cn(leftStyle, className)}>{children}</div>;
}

function RightSide({ children, className }: CommonProps) {
  return <div className={cn(rightStyle, className)}>{children}</div>;
}

export const SeparateContainer = {
  LeftSide,
  RightSide,
};
