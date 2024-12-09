'use client';

import { useState, useEffect } from 'react';
import { MentoringSession } from '@repo/client/components/types/main/mentor/mentorTypes';

interface MentorSessionListProps {
  mentorId: string;
}

export default function MentorSessionList({
  mentorId,
}: MentorSessionListProps) {
  const [sessions, setSessions] = useState<MentoringSession[]>([]);

  useEffect(() => {
    const mockSessions: MentoringSession[] = [
      {
        id: '1',
        menteeId: '101',
        menteeName: 'Alice',
        date: '2023-06-01',
        duration: 60,
        topic: 'React Hooks',
      },
      {
        id: '2',
        menteeId: '102',
        menteeName: 'Bob',
        date: '2023-06-03',
        duration: 45,
        topic: 'TypeScript Basics',
      },
      {
        id: '3',
        menteeId: '103',
        menteeName: 'Charlie',
        date: '2023-06-05',
        duration: 90,
        topic: 'Node.js Performance',
      },
    ];
    setSessions(mockSessions);
  }, [mentorId]);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">My Mentoring Sessions</h2>
      <div className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold">{session.topic}</h3>
            <p className="text-sm text-gray-600">with {session.menteeName}</p>
            <p className="text-sm text-gray-600">
              {session.date} ({session.duration} minutes)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
