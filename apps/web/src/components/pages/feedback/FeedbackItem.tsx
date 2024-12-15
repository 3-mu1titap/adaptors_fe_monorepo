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

export default function FeedbackList() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-2">
      <FeedbackItem
        icon="user"
        title="비비"
        score={3}
        maxScore={5}
        date="2024년 2월 21일 설정"
      />
      <FeedbackItem
        icon="circle"
        title="수업"
        score={4}
        maxScore={5}
        date="2024년 2월 21일 설정"
        iconColor="text-pink-500"
      />
    </div>
  );
}
