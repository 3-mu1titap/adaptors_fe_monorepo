'use client';
import { MentoringResult } from '@repo/ui/types/CommonType.ts';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

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
  mentoringSessionList: MentoringResult[] | [];
}) {
  const router = useRouter();
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const sessionDates = useMemo(() => {
    const dates = new Set<string>();
    const sessionCountMap = new Map<string, number>();

    mentoringSessionList.forEach((item) => {
      dates.add(item.startDate);
      sessionCountMap.set(item.startDate, item.totalCount);
    });

    return { dates, sessionCountMap };
  }, [mentoringSessionList]);

  const nearestFutureSession = useMemo(() => {
    const futureSessions = Array.from(sessionDates.dates)
      .filter((date) => date >= formattedToday)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    return futureSessions[0] || formattedToday;
  }, [sessionDates.dates, formattedToday]);

  const [selectedDate, setSelectedDate] =
    useState<string>(nearestFutureSession);

  const getStartOfWeek = (date: Date) => {
    const dayOfWeek = date.getDay();
    const diff = dayOfWeek === 0 ? 0 : -dayOfWeek;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff);
  };

  const generateDaysForMobile = (): {
    month: number;
    year: number;
    days: CalendarDay[];
  }[] => {
    const startDate = getStartOfWeek(today);
    const monthlyDays: { month: number; year: number; days: CalendarDay[] }[] =
      [];
    let currentMonthDays: CalendarDay[] = [];
    let currentMonth = startDate.getMonth();
    let currentYear = startDate.getFullYear();

    for (let i = 0; i < 30; i++) {
      const currentDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + i
      );
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
      const hasSession = sessionDates.dates.has(formattedDate);
      const sessionCount = hasSession
        ? sessionDates.sessionCountMap.get(formattedDate) || 0
        : 0;

      const dayObj = {
        date: currentDate.getDate(),
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
        isCurrentMonth: currentDate.getMonth() === today.getMonth(),
        hasSession,
        sessionCount,
        isSelected: formattedDate === selectedDate,
      };

      // If month changes, start a new month's array
      if (currentDate.getMonth() !== currentMonth) {
        if (currentMonthDays.length > 0) {
          monthlyDays.push({
            month: currentMonth,
            year: currentYear,
            days: currentMonthDays,
          });
        }
        currentMonthDays = [];
        currentMonth = currentDate.getMonth();
        currentYear = currentDate.getFullYear();
      }

      currentMonthDays.push(dayObj);
    }

    // Add the last month
    if (currentMonthDays.length > 0) {
      monthlyDays.push({
        month: currentMonth,
        year: currentYear,
        days: currentMonthDays,
      });
    }

    return monthlyDays;
  };

  const handleDateClick = (year: number, month: number, date: number) => {
    const selected = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    setSelectedDate(selected);
    router.push(`?selectedDate=${selected}`, { scroll: false });
  };

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className="space-y-4 mt-6">
      {generateDaysForMobile().map(({ month, year, days }) => (
        <div key={`${year}-${month}`} className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-center">
            {monthNames[month]} {year}
          </h3>
          <div className="grid grid-cols-7 gap-1">
            {/* Weekday headers */}
            {weekDays.map((day) => (
              <div
                key={day}
                className={`text-center text-md py-2 ${day === 'SUN' ? 'text-red-700' : day === 'SAT' ? 'text-blue-700' : 'text-gray-500'}`}
              >
                {day}
              </div>
            ))}

            {/* Days */}
            {days.map((day, i) => (
              <button
                key={i}
                onClick={() => {
                  if (day.hasSession) {
                    handleDateClick(day.year, day.month, day.date);
                  }
                }}
                className={`
                  z-0 aspect-square flex items-center justify-center rounded-full text-md
                 text-black
                  ${day.hasSession ? 'bg-gray-300' : ''}
                  ${day.isSelected ? 'bg-yellow-400 text-black' : ''}
                  cursor-pointer
                `}
              >
                {day.date}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
