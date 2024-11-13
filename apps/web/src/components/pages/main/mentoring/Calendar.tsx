'use client';
import { useState } from 'react';
import { sessions } from './MentoringDetail';
interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  hasSession: boolean;
  isSelected: boolean;
}

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<string>('2024.11.12');
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
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const now = new Date();
  return (
    <>
      {[0, 1].map((offset) => {
        const month = now.getMonth() + offset;
        const year = month > 11 ? now.getFullYear() + 1 : now.getFullYear();
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
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (day.isCurrentMonth && day.hasSession) {
                        setSelectedDate(
                          `${day.year}.${String(day.month + 1).padStart(2, '0')}.${String(day.date).padStart(2, '0')}`
                        );
                      }
                    }}
                    className={`
                aspect-square flex items-center justify-center rounded-full text-md
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
    </>
  );
}
