import React from 'react';
import { format, parseISO } from 'date-fns';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Badge } from '@repo/ui/components/ui/badge';
import { Calendar, Clock, Users, DollarSign } from 'lucide-react';
import { MentoringSessionContent } from '../../types/mentoring/mentoringTypes';

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusConfig: {
    [key: string]: { label: string; color: string };
  } = {
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
    <Badge
      variant="outline"
      className={`${color} border-0 px-2 py-1 text-nowrap ml-4 sm:px-4 sm:py-2 text-xs sm:text-sm`}
    >
      {label}
    </Badge>
  );
};

export default function MentoringCard({
  item,
}: {
  item: MentoringSessionContent;
}) {
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  };

  const price = item.price ?? 100;
  const minHeadCount = item.minHeadCount ?? 3;
  const nowHeadCount = item.nowHeadCount ?? 2;
  const maxHeadCount = item.maxHeadCount ?? 5;

  return (
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
          <span>
            {format(parseISO(item.startDate), 'yyyy년 MM월 dd일')} -{' '}
            {format(parseISO(item.endDate), 'yyyy년 MM월 dd일')}
          </span>
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
            현재 {nowHeadCount}명 (최소 {minHeadCount}명 ~ 최대 {maxHeadCount}
            명)
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-gray-500" />
          <span>
            {price.toLocaleString('ko-kr')} <span className="ml-1">Volt</span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          최종 수정: {format(parseISO(item.updatedAt), 'yyyy-MM-dd HH:mm')}
        </div>
      </CardFooter>
    </Card>
  );
}
