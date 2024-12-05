import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { Badge } from '@repo/ui/components/ui/badge';
import { Card, CardContent } from '@repo/ui/components/ui/card';
import { format, isBefore, parseISO } from 'date-fns';

interface SessionUser {
  userUuid: string | null;
  menteeImageUrl: string | null;
}

interface MentoringSession {
  sessionUuid: string;
  mentoringUuid: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  deadlineDate: string;
  minHeadCount: number;
  maxHeadCount: number;
  nowHeadCount: number;
  isParticipating: boolean;
  price: number;
  isClosed: boolean;
  sessionUserList: SessionUser[];
}

const MentoringSessionCard: React.FC<{ session: MentoringSession }> = ({
  session,
}) => {
  const today = new Date();
  const deadlineDate = parseISO(session.deadlineDate);
  const isBeforeDeadline = isBefore(today, deadlineDate);
  const isAvailable =
    isBeforeDeadline &&
    session.nowHeadCount < session.maxHeadCount &&
    !session.isClosed;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500">
            {format(parseISO(session.startDate), 'MM/dd')} {session.startTime} -{' '}
            {session.endTime}
          </div>
          <Badge variant={isAvailable ? 'default' : 'secondary'}>
            {isAvailable ? '신청 가능' : '신청 마감'}
          </Badge>
        </div>
        <div className="mb-2">
          <span className="font-semibold">참가자:</span> {session.nowHeadCount}/
          {session.maxHeadCount}
        </div>
        <div className="mb-2">
          <span className="font-semibold">가격:</span>{' '}
          {session.price.toLocaleString()}원
        </div>
        <div className="mb-2">
          <span className="font-semibold">신청 마감일:</span>{' '}
          {format(deadlineDate, 'yyyy/MM/dd')}
        </div>
        <div className="flex -space-x-2 overflow-hidden">
          {session.sessionUserList.map((user, index) =>
            user.menteeImageUrl ? (
              <Avatar key={index} className="border-2 border-background">
                <AvatarImage
                  src={user.menteeImageUrl}
                  alt={`Mentee ${index + 1}`}
                />
                <AvatarFallback>멘티</AvatarFallback>
              </Avatar>
            ) : null
          )}
        </div>
        {!isAvailable && (
          <div className="mt-2 text-sm text-red-500">
            {!isBeforeDeadline
              ? '신청 기간이 지났습니다.'
              : session.nowHeadCount >= session.maxHeadCount
                ? '정원이 다 찼습니다.'
                : '신청이 마감되었습니다.'}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MentoringSessionCard;
