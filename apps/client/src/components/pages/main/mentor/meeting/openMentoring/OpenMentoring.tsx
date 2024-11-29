import { formatDate } from '@repo/client/components/utils/dateUtil';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Video, Clock, Calendar } from 'lucide-react';
import Swal from 'sweetalert2';

export interface TimeDataType {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface MentoringSessionDataType {
  mentoringName: string;
  sessionUuid: string;
  startDate: string;
  endDate: string;
  startTime: TimeDataType;
  endTime: TimeDataType;
}

export function isWithinTenMinutes(
  startDate: string,
  startTime: TimeDataType
): boolean {
  const now = new Date();
  const start = new Date(startDate);
  start.setHours(startTime.hour);
  start.setMinutes(startTime.minute);

  const tenMinutesBefore = new Date(start.getTime() - 10 * 60000);
  return now >= tenMinutesBefore;
}

export function formatTime(time: TimeDataType): string {
  return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`;
}

export default function OpenMentoring({
  mentoringSessionList,
  joinRoom,
}: {
  mentoringSessionList: MentoringSessionDataType[];
  joinRoom: () => Promise<void>;
}) {
  const handleJoinAttempt = async (session: MentoringSessionDataType) => {
    if (isWithinTenMinutes(session.startDate, session.startTime)) {
      await joinRoom();
    } else {
      const startTime = new Date(session.startDate);
      startTime.setHours(session.startTime.hour);
      startTime.setMinutes(session.startTime.minute);

      Swal.fire({
        title: '생성 불가',
        html: `멘토링 시작 10분 전부터 생성이 가능합니다.<br/>
              시작 시간: ${formatDate(session.startDate)} ${formatTime(session.startTime)}`,
        icon: 'info',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    }
  };

  return (
    <ul className="w-full max-w-4xl mx-auto space-y-6 p-6">
      {mentoringSessionList.map((session) => {
        const canJoin = isWithinTenMinutes(
          session.startDate,
          session.startTime
        );

        return (
          <Card
            key={session.sessionUuid}
            className="transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">
                  {session.mentoringName}
                </CardTitle>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    canJoin
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {canJoin ? '생성 가능' : '생성 불가'}
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formatDate(session.startDate)}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>
                    {formatTime(session.startTime)} ~{' '}
                    {formatTime(session.endTime)}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  className={`inline-flex items-center justify-center transition-all duration-300 bg-[#FFD84D] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/90 ${
                    canJoin
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-gray-500 hover:bg-gray-600'
                  } text-md`}
                  onClick={() => handleJoinAttempt(session)}
                >
                  <Video className="mr-2 h-5 w-5" />
                  생성하기
                </button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </ul>
  );
}
