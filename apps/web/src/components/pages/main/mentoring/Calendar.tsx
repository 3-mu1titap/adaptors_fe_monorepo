'use client';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { MentoringSessionList } from '../../../types/mentoring/mentoringTypes';

interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  hasSession: boolean;
  sessionCount: number;
  isSelected: boolean;
}

export default function Calendar({
  mentoringSessionList = [],
}: {
  mentoringSessionList: MentoringSessionList | [];
}) {
  // Create a Set of dates with sessions and a map to track session counts
  const sessionDates = useMemo(() => {
    const dates = new Set<string>();
    const sessionCountMap = new Map<string, number>();

    Object.entries(mentoringSessionList).forEach(([date, sessions]) => {
      dates.add(date);
      sessionCountMap.set(date, sessions.length);
    });

    return {
      dates,
      sessionCountMap,
    };
  }, [mentoringSessionList]);

  // Find the nearest future session date
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const nearestFutureSession = useMemo(() => {
    const futureSessions = Object.keys(mentoringSessionList)
      .filter((date) => date >= formattedToday)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    return futureSessions[0] || formattedToday;
  }, [mentoringSessionList, formattedToday]);

  const [selectedDate, setSelectedDate] =
    useState<string>(nearestFutureSession);
  const router = useRouter();
  const mentoringUuid = '1';

  const generateCalendarDays = (year: number, month: number): CalendarDay[] => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: CalendarDay[] = [];

    // Days from the previous month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const date = new Date(year, month, -i);
      days.unshift({
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        isCurrentMonth: false,
        hasSession: false,
        sessionCount: 0,
        isSelected: false,
      });
    }

    // Days in the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const hasSession = sessionDates.dates.has(currentDate);
      const sessionCount = hasSession
        ? sessionDates.sessionCountMap.get(currentDate) || 0
        : 0;

      days.push({
        date: i,
        month: month,
        year: year,
        isCurrentMonth: true,
        hasSession,
        sessionCount,
        isSelected: currentDate === selectedDate,
      });
    }

    return days;
  };

  const handleDateClick = (year: number, month: number, date: number) => {
    const selected = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    setSelectedDate(selected);
    router.push(`/mentoring/${mentoringUuid}?selectedDate=${selected}`);
  };

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const now = new Date();

  return (
    <>
      {[0, 1].map((offset) => {
        const month = now.getMonth() + offset;
        const year = now.getFullYear() + Math.floor(month / 12);
        const displayMonth = month % 12;
        const monthName = new Date(year, displayMonth).toLocaleString('en-US', {
          month: 'long',
        });

        return (
          <div key={month} className="space-y-4">
            <h2 className="font-3xl text-center">{`${monthName} ${year}`}</h2>
            <div className="grid grid-cols-7 gap-1">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className={`text-center text-md py-2 ${day === 'SUN' ? 'text-red-700' : day === 'SAT' ? 'text-blue-700' : 'text-gray-500'}`}
                >
                  {day}
                </div>
              ))}
              {generateCalendarDays(year, displayMonth).map((day, i) => {
                const isSaturday =
                  new Date(day.year, day.month, day.date).getDay() === 6;
                const isSunday =
                  new Date(day.year, day.month, day.date).getDay() === 0;
                const sessionColorIntensity =
                  day.sessionCount > 0
                    ? `bg-green-${Math.min(day.sessionCount * 200, 700)}`
                    : '';

                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (day.isCurrentMonth && day.hasSession) {
                        handleDateClick(day.year, day.month, day.date);
                      }
                    }}
                    className={`
                      z-0 aspect-square flex items-center justify-center rounded-full text-md
                      ${day.isCurrentMonth ? (isSaturday ? 'text-blue-500' : isSunday ? 'text-red-500' : 'text-black') : 'text-gray-300'}
                      ${day.isSelected ? 'bg-yellow-400 text-black' : ''}
                      ${day.hasSession && !day.isSelected ? `${sessionColorIntensity} bg-gray-200` : ''}
                      ${!day.isCurrentMonth ? 'cursor-default' : 'cursor-pointer'}
                      relative
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
    </>
  );
}
