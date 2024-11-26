'use client';

import { useCallback, useEffect, useState } from 'react';
import SelectedTime from './SelectedTime';

const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
const HOURS = Array.from({ length: 17 }, (_, i) => i + 7);

export interface TimeSlotType {
  day: string;
  start: string;
  end: string;
}

interface GroupedTimeSlots {
  [key: string]: Array<{
    start: string;
    end: string;
  }>;
}

export default function TimeSlotSelector() {
  const [timeSlots, setTimeSlots] = useState<TimeSlotType[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState<{
    day: number;
    hour: number;
  } | null>(null);
  const [currentCell, setCurrentCell] = useState<{
    day: number;
    hour: number;
  } | null>(null);

  const createHourlySlots = (
    start: { day: number; hour: number },
    end: { day: number; hour: number }
  ): TimeSlotType[] => {
    if (start.day !== end.day) return [];

    const slots: TimeSlotType[] = [];
    const startHour = Math.min(start.hour, end.hour);
    const endHour = Math.max(start.hour, end.hour);

    for (let hour = startHour; hour <= endHour; hour++) {
      slots.push({
        day: DAYS[start.day],
        start: `${hour.toString().padStart(2, '0')}:00`,
        end: `${(hour + 1).toString().padStart(2, '0')}:00`,
      });
    }

    return slots;
  };

  const handleMouseDown = (day: number, hour: number) => {
    setIsDragging(true);
    setStartCell({ day, hour });
    setCurrentCell({ day, hour });
  };

  const handleMouseEnter = (day: number, hour: number) => {
    if (isDragging && startCell) {
      setCurrentCell({ day, hour });
    }
  };

  const handleMouseUp = () => {
    if (startCell && currentCell) {
      const newSlots = createHourlySlots(startCell, currentCell);
      if (newSlots.length > 0) {
        // Remove any overlapping slots for the same day
        const filteredSlots = timeSlots.filter(
          (existingSlot) =>
            !newSlots.some(
              (newSlot) =>
                existingSlot.day === newSlot.day &&
                existingSlot.start === newSlot.start
            )
        );
        setTimeSlots([...filteredSlots, ...newSlots]);
      }
    }
    setIsDragging(false);
    setStartCell(null);
    setCurrentCell(null);
  };

  const isSlotSelected = useCallback(
    (day: number, hour: number) => {
      return timeSlots.some(
        (slot) =>
          slot.day === DAYS[day] &&
          slot.start === `${hour.toString().padStart(2, '0')}:00`
      );
    },
    [timeSlots]
  );

  const isCurrentlyDragging = useCallback(
    (day: number, hour: number) => {
      if (!isDragging || !startCell || !currentCell) return false;

      if (startCell.day !== day) return false;

      const startHour = Math.min(startCell.hour, currentCell.hour);
      const endHour = Math.max(startCell.hour, currentCell.hour);

      return hour >= startHour && hour <= endHour;
    },
    [isDragging, startCell, currentCell]
  );

  const removeTimeSlot = (slot: TimeSlotType) => {
    setTimeSlots((prev) =>
      prev.filter(
        (s) =>
          !(s.day === slot.day && s.start === slot.start && s.end === slot.end)
      )
    );
  };

  // 요일별로 시간을 그룹화하는 함수
  const getGroupedTimeSlots = (): GroupedTimeSlots => {
    const grouped = timeSlots.reduce((acc: GroupedTimeSlots, slot) => {
      if (!acc[slot.day]) {
        acc[slot.day] = [];
      }
      // 중복 체크
      const isDuplicate = acc[slot.day].some(
        (existingSlot) =>
          existingSlot.start === slot.start && existingSlot.end === slot.end
      );
      if (!isDuplicate) {
        acc[slot.day].push({
          start: slot.start,
          end: slot.end,
        });
      }
      return acc;
    }, {});

    // 시간순으로 정렬
    Object.keys(grouped).forEach((day) => {
      grouped[day].sort((a, b) => a.start.localeCompare(b.start));
    });

    return grouped;
  };

  // API 요청을 위한 데이터 준비
  const prepareApiData = () => {
    const groupedData = getGroupedTimeSlots();
    return Object.entries(groupedData).map(([day, times]) => ({
      [day]: times,
    }));
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [startCell, currentCell]);

  // 콘솔에서 데이터 확인용 (나중에 삭제하세요)
  useEffect(() => {
    console.log('API Data Format:', prepareApiData());
  }, [timeSlots]);

  return (
    <div className="space-y-4 sm:flex">
      <section>
        <label>Time Slots</label>
        <div className="border rounded-lg overflow-x-auto">
          <table className="w-full sm:w-[600px]">
            <thead>
              <tr>
                <th className="p-2 border-b"></th>
                {DAYS.map((day) => (
                  <th key={day} className="p-2 border-b">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HOURS.map((hour) => (
                <tr key={hour}>
                  <td className="p-2 border-r text-lg w-[70px]">
                    {`${hour.toString().padStart(2, '0')}:00`}
                  </td>
                  {DAYS.map((_, dayIndex) => (
                    <td
                      key={dayIndex}
                      className="p-0 border"
                      onMouseDown={() =>
                        !isSlotSelected(dayIndex, hour) &&
                        handleMouseDown(dayIndex, hour)
                      }
                      onMouseEnter={() => handleMouseEnter(dayIndex, hour)}
                    >
                      <div
                        className={`w-full h-6 ${
                          isSlotSelected(dayIndex, hour)
                            ? 'bg-blue-300 cursor-not-allowed'
                            : isCurrentlyDragging(dayIndex, hour)
                              ? 'bg-blue-200 cursor-pointer'
                              : 'bg-gray-100 hover:bg-gray-200 cursor-pointer'
                        }`}
                      ></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="w-full px-4">
        <label>Selected Time Slots</label>
        <div className="space-y-2">
          {Object.entries(getGroupedTimeSlots()).map(([day, slots]) => (
            <div key={day} className="border p-2 rounded">
              <h3 className="font-bold mb-2">{day}</h3>
              {slots.map((slot, index) => (
                <SelectedTime
                  key={`${day}-${slot.start}`}
                  TimeSlot={{ day, ...slot }}
                  removeTimeSlot={removeTimeSlot}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
