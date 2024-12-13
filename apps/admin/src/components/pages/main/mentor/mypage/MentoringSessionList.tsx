'use client';

import { useEffect, useState } from 'react';
import {
  MentorSessionHistoryType,
  SessionHistoryType,
} from '@repo/admin/components/types/main/mypage/myPageTypes';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Button } from '@repo/ui/components/ui/button';
import { Calendar, Clock, Users, DollarSign } from 'lucide-react';
import { GetSessionHistory } from '@repo/admin/actions/mypage/mypageAction';

export default function MentorSessionList() {
  const [sessionHistory, setSessionHistory] =
    useState<MentorSessionHistoryType | null>(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    setLoading(true);
    try {
      const result = await GetSessionHistory({ page, includeCancelled: true });
      if (sessionHistory) {
        setSessionHistory({
          ...result,
          content: [...sessionHistory.content, ...result.content],
        });
      } else {
        setSessionHistory(result);
      }
      setPage(page + 1);
    } catch (error) {
      console.error('Failed to fetch sessions:', error);
    }
    setLoading(false);
  };

  const formatDate = (date: string, time: string) => {
    return new Date(`${date}T${time}`).toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const calculateDuration = (start: string, end: string) => {
    const startTime = new Date(`1970-01-01T${start}`);
    const endTime = new Date(`1970-01-01T${end}`);
    const durationMs = endTime.getTime() - startTime.getTime();
    return Math.round(durationMs / 60000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {sessionHistory?.content.map((session: SessionHistoryType) => (
              <Card key={session.sessionUuid} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">
                      {session.mentoringName}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        session.status === 'COMPLETED'
                          ? 'bg-green-100 text-green-800'
                          : session.status === 'CANCELLED'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {session.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                      <span>
                        {formatDate(session.startDate, session.startTime)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-gray-500" />
                      <span>
                        {calculateDuration(session.startTime, session.endTime)}{' '}
                        minutes
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-gray-500" />
                      <span>
                        {session.nowHeadCount} / {session.maxHeadCount}{' '}
                        participants
                      </span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-gray-500" />
                      <span>{session.price.toLocaleString()} Volt</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {sessionHistory && !sessionHistory.last && (
            <div className="mt-8 text-center">
              <Button
                onClick={fetchSessions}
                disabled={loading}
                className="px-6 py-2"
              >
                {loading ? 'Loading...' : 'Show More'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
