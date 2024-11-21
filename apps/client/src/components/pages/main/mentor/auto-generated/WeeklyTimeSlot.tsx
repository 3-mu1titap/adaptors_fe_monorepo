'use client';

import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import { useState } from 'react';

type TimeSlot = {
  start: string;
  end: string;
};

type WeeklySchedule = {
  [key: string]: TimeSlot[];
};

const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function WeeklyTimeSlotSelector() {
  const [schedule, setSchedule] = useState<WeeklySchedule>({});
  const [currentDay, setCurrentDay] = useState(DAYS_OF_WEEK[0]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const addTimeSlot = () => {
    if (!startTime || !endTime) return;

    const newSlot = { start: startTime, end: endTime };
    const currentSlots = schedule[currentDay] || [];

    // Check for overlaps
    const hasOverlap = currentSlots.some(
      (slot) =>
        (newSlot.start >= slot.start && newSlot.start < slot.end) ||
        (newSlot.end > slot.start && newSlot.end <= slot.end) ||
        (newSlot.start <= slot.start && newSlot.end >= slot.end)
    );

    if (hasOverlap) {
      alert(
        'This time slot overlaps with an existing slot. Please choose a different time.'
      );
      return;
    }

    setSchedule((prev) => ({
      ...prev,
      [currentDay]: [...currentSlots, newSlot].sort((a, b) =>
        a.start.localeCompare(b.start)
      ),
    }));

    setStartTime('');
    setEndTime('');
  };

  const removeTimeSlot = (day: string, index: number) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        세션을 생성할 요일, 시간을 선택해주세요
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="w-full lg:w-1/2 py-10">
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="day-select">Select Day</label>
                <select
                  id="day-select"
                  className="w-full p-2 border rounded-md"
                  value={currentDay}
                  onChange={(e) => setCurrentDay(e.target.value)}
                >
                  {DAYS_OF_WEEK.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="start-time">시작시간</label>
                  <Input
                    id="start-time"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    style={{ fontSize: '1rem' }}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="end-time">종료시간</label>
                  <Input
                    id="end-time"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    style={{ fontSize: '1rem' }}
                  />
                </div>
              </div>
              <Button onClick={addTimeSlot} className="w-full text-xl">
                세션 추가하기
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle>선택된 시간</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" pr-4">
              {DAYS_OF_WEEK.map(
                (day) =>
                  schedule[day]?.length > 0 && (
                    <div key={day} className="mb-4">
                      <h3 className="font-semibold mb-2">{day}</h3>
                      <ul className="space-y-2">
                        {schedule[day].map((slot, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center p-2 bg-gray-100 rounded"
                          >
                            <span>{`${slot.start} ~ ${slot.end}`}</span>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => removeTimeSlot(day, index)}
                            >
                              Remove
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
