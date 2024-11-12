'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MentoringSessionDataType } from '../../../types/mentoring/mentoringTypes';
import FitImage from '../../../ui/image/fit-image';

interface MentoringSession {
  id: number;
  date: string;
  time: string;
  status: 'available' | 'pending' | 'booked' | '';
  statusMessage: string;
  participants: number;
  additionalParticipants: number;
  reviews: number;
  buttonText: string;
  buttonStyle: 'yellow' | 'gray' | 'dark';
}

interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  hasSession: boolean;
  isSelected: boolean;
}

const getCurrentTime = () => {
  const now = new Date();
  return `PM ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
};

export default function MentoringCalendar({
  mentoringSessionList,
}: {
  mentoringSessionList: MentoringSessionDataType[];
}) {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState<string>('2024.11.12');
  const [showAllSessions, setShowAllSessions] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  const sessions: MentoringSession[] = [
    {
      id: 1,
      date: '2024.11.12',
      time: 'S 13:00 - E 14:00',
      status: 'available',
      statusMessage: '해당 섹션은 종료되었습니다.',
      participants: 78,
      additionalParticipants: 9,
      reviews: 78,
      buttonText: '종료',
      buttonStyle: 'gray',
    },
    {
      id: 2,
      date: '2024.11.12',
      time: 'S 18:00 - E 19:00',
      status: 'pending',
      statusMessage: '긴급공지',
      participants: 0,
      additionalParticipants: 9,
      reviews: 0,
      buttonText: '진행중',
      buttonStyle: 'dark',
    },
    {
      id: 3,
      date: '2024.11.12',
      time: 'S 21:00 - E 22:00',
      status: 'available',
      statusMessage: '남은 자리 19',
      participants: 1,
      additionalParticipants: 0,
      reviews: 0,
      buttonText: '참가하기',
      buttonStyle: 'yellow',
    },
    {
      id: 4,
      date: '2024.11.13',
      time: 'S 21:00 - E 22:00',
      status: 'available',
      statusMessage: '남은 자리 2 - 마감임박',
      participants: 45,
      additionalParticipants: 10,
      reviews: 0,
      buttonText: '참가하기',
      buttonStyle: 'yellow',
    },
    {
      id: 5,
      date: '2024.11.13',
      time: 'S 21:00 - E 22:00',
      status: 'booked',
      statusMessage: '마감되었습니다.',
      participants: 45,
      additionalParticipants: 16,
      reviews: 0,
      buttonText: '마감',
      buttonStyle: 'dark',
    },
  ];

  const generateCalendarDays = (year: number, month: number): CalendarDay[] => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: CalendarDay[] = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      const date = new Date(year, month, -i);
      days.unshift({
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        isCurrentMonth: false,
        hasSession: false,
        isSelected: false,
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = `${year}.${String(month + 1).padStart(2, '0')}.${String(i).padStart(2, '0')}`;
      days.push({
        date: i,
        month: month,
        year: year,
        isCurrentMonth: true,
        hasSession: sessions.some((session) => session.date === currentDate),
        isSelected: currentDate === selectedDate,
      });
    }

    return days;
  };

  const getDisplayedSessions = () => {
    let displaySessions: MentoringSession[] = [];
    if (showAllSessions) {
      displaySessions = sessions;
    } else {
      const selectedSessions = sessions.filter(
        (session) => session.date === selectedDate
      );
      const nextDaySessions = sessions.find(
        (session) => session.date > selectedDate
      );
      displaySessions = [...selectedSessions];
      if (nextDaySessions) {
        displaySessions.push(nextDaySessions);
      }
    }

    const groupedSessions: { [key: string]: MentoringSession[] } = {};
    displaySessions.forEach((session) => {
      if (!groupedSessions[session.date]) {
        groupedSessions[session.date] = [];
      }
      groupedSessions[session.date].push(session);
    });

    return groupedSessions;
  };

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Left Section */}
      <section className="w-[400px] p-6 bg-white border-r border-gray-200">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <FitImage
                src="/assets/images/intro1.svg"
                alt="Profile"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">@Jason Ahn</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>78K Reviews</span>
                <span>•</span>
                <span className="text-red-500">♥ 213K is Good</span>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm">
              SHARE THIS MENTOR
            </button>
          </div>

          {/* Date Display */}
          <div className="bg-yellow-400 rounded-lg p-4">
            <div className="flex justify-between text-black font-medium">
              <span>{`${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${weekDays[now.getDay() - 1]}`}</span>
              <span>{currentTime}</span>
            </div>
          </div>

          {/* Calendar */}
          {[0, 1].map((offset) => {
            const month = now.getMonth() + offset;
            const year = month > 11 ? now.getFullYear() + 1 : now.getFullYear();
            const displayMonth = month % 12;

            const monthName = new Date(year, displayMonth).toLocaleString(
              'en-US',
              { month: 'long' }
            );

            return (
              <div key={month} className="space-y-4">
                <h2 className="font-medium text-center">{`${monthName} ${year}`}</h2>
                <div className="grid grid-cols-7 gap-1">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className={`text-center text-sm py-2 ${day === 'SUN' ? 'text-red-700' : day === 'SAT' ? 'text-blue-700' : 'text-gray-500'}`}
                    >
                      {day}
                    </div>
                  ))}
                  {generateCalendarDays(year, displayMonth).map((day, i) => {
                    const isSaturday =
                      new Date(day.year, day.month, day.date).getDay() === 6;
                    const isSunday =
                      new Date(day.year, day.month, day.date).getDay() === 0;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          if (day.isCurrentMonth && day.hasSession) {
                            setSelectedDate(
                              `${day.year}.${String(day.month + 1).padStart(2, '0')}.${String(day.date).padStart(2, '0')}`
                            );
                            setShowAllSessions(false);
                          }
                        }}
                        className={`
                aspect-square flex items-center justify-center rounded-full text-sm
                ${day.isCurrentMonth ? (isSaturday ? 'text-blue-500' : isSunday ? 'text-red-500' : 'text-black') : 'text-gray-300'}
                ${day.isSelected ? 'bg-yellow-400' : ''}
                ${day.hasSession && !day.isSelected ? 'bg-gray-200' : ''}
                ${!day.isCurrentMonth ? 'cursor-default' : 'cursor-pointer'}
              `}
                      >
                        {day.date}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-xl font-bold">
            웹개발자로 살아남기위한 최고의 솔루션 제공합니다.
          </h1>

          <div className="relative w-full h-[400px] p-10 rounded-xl overflow-hidden bg-gray-200">
            <FitImage
              src="/assets/images/intro1.svg"
              alt="Profile"
              className="object-contain"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold">50% 할인</span>
                <span className="text-sm text-gray-500 line-through">
                  40,000��
                </span>
              </div>
              <span className="text-2xl font-bold">20,000원</span>
            </div>
            <div className="text-sm text-gray-500 mt-2">{selectedDate}</div>
          </div>

          <div className="space-y-6">
            {Object.entries(getDisplayedSessions()).map(
              ([date, dateSessions]) => (
                <div key={date} className="space-y-3">
                  <h3 className="font-medium">{date}</h3>
                  {dateSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div>
                        <div className="font-medium">{session.time}</div>
                        <div className="text-sm text-yellow-500 mt-1">
                          {session.statusMessage}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"
                              />
                            ))}
                            {session.additionalParticipants > 0 && (
                              <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs">
                                +{session.additionalParticipants}
                              </div>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            {session.reviews}K
                            <span className="text-xs ml-1">Reviews</span>
                          </div>
                        </div>
                        <button
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            session.status === 'available'
                              ? 'bg-yellow-400 text-black'
                              : session.status === 'booked'
                                ? 'bg-gray-200 text-gray-600'
                                : 'bg-gray-800 text-white'
                          }`}
                        >
                          {session.buttonText}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>

          {!showAllSessions && (
            <button
              onClick={() => setShowAllSessions(true)}
              className="w-full py-3 text-sm text-gray-500 hover:text-gray-700"
            >
              전체 세션 더보기
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
