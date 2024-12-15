'use client';

import { Circle, User } from 'lucide-react';
import Progress from './Progress';

interface FeedbackItemProps {
  icon: 'user' | 'circle';
  title: string;
  score: number;
  maxScore: number;
  date: string;
  iconColor?: string;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({
  icon,
  title,
  score,
  maxScore,
  date,
  iconColor = 'text-gray-400',
}) => {
  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex items-center gap-2">
        <div className={`${iconColor}`}>
          {icon === 'user' ? (
            <User className="w-5 h-5" />
          ) : (
            <Circle className="w-5 h-5 fill-current" />
          )}
        </div>
        <span className="text-sm font-medium text-gray-900">{title}</span>
      </div>
      <Progress value={score} max={maxScore} className="mb-1" />
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {score}/{maxScore}점
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
    </div>
  );
};
