'use client';
import React from 'react';
import { format, parseISO } from 'date-fns';
import { MentoringContent } from '../../types/mentoring/mentoringTypes';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Badge } from '@repo/ui/components/ui/badge';
import { Button } from '@repo/ui/components/ui/button';
import { Calendar, Clock, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusConfig: { [key: string]: { label: string; color: string } } = {
    PENDING: { label: '대기 중', color: 'bg-yellow-100 text-yellow-800' },
    ONGOING: { label: '진행 중', color: 'bg-green-100 text-green-800' },
    COMPLETED: { label: '완료', color: 'bg-blue-100 text-blue-800' },
    CANCELLED: { label: '취소됨', color: 'bg-red-100 text-red-800' },
  };

  const { label, color } = statusConfig[status] || {
    label: status,
    color: 'bg-gray-100 text-gray-800',
  };

  return (
    <Badge variant="outline" className={`${color} border-0`}>
      {label}
    </Badge>
  );
};

export default function MentoringCard({ item }: { item: MentoringContent }) {
  const formatTime = (time: { hour: number; minute: number }) => {
    return `${String(time.hour).padStart(2, '0')}:${String(
      time.minute
    ).padStart(2, '0')}`;
  };

  return (
    <Link
      href={`{mentoring/${item.mentoringUuid}
    }`}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-bold">
              {item.mentoringName}
            </CardTitle>
            <StatusBadge status={item.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span>{format(parseISO(item.startDate), 'yyyy년 MM월 dd일')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <span>
              {formatTime(item.startTime)} - {formatTime(item.endTime)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-500" />
            <span>
              현재 {item.nowHeadCount}명 (최소 {item.minHeadCount}명 ~ 최대{' '}
              {item.maxHeadCount}명)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <span>{item.price.toLocaleString('ko-kr')}원</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            최종 수정: {format(parseISO(item.updatedAt), 'yyyy-MM-dd HH:mm')}
          </div>
          <Button variant="outline">자세히 보기</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
