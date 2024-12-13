import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@repo/ui/components/ui/dialog';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';
import { Label } from '@repo/ui/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { addDays, parse, isAfter, differenceInMinutes } from 'date-fns';
import { X } from 'lucide-react';

export interface TimeRange {
  startTime: string;
  endTime: string;
  minHeadCount: number;
  maxHeadCount: number;
  price: number;
  dayOfWeekList: string[];
}

export interface MentoringSession {
  mentoringUuid: string;
  creationStartDate: string;
  creationEndDate: string;
  timeRangeVos: TimeRange[];
}

interface AddMentoringSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (session: MentoringSession) => void;
}

const initialTimeRange: TimeRange = {
  startTime: '',
  endTime: '',
  minHeadCount: 1,
  maxHeadCount: 5,
  price: 10000,
  dayOfWeekList: [],
};

const validateSession = (session: MentoringSession): string[] => {
  const errors: string[] = [];
  const tomorrow = addDays(new Date(), 1);
  tomorrow.setHours(0, 0, 0, 0);
  const ninetyDaysLater = addDays(new Date(), 90);
  ninetyDaysLater.setHours(23, 59, 59, 999);

  if (!session.creationStartDate) {
    errors.push('시작 날짜를 선택해주세요.');
  } else {
    const startDate = new Date(session.creationStartDate);
    if (startDate < tomorrow || startDate > ninetyDaysLater) {
      errors.push('시작 날짜는 내일부터 90일 이내여야 합니다.');
    }
  }

  if (!session.creationEndDate) {
    errors.push('종료 날짜를 선택해주세요.');
  } else {
    const endDate = new Date(session.creationEndDate);
    if (endDate > ninetyDaysLater) {
      errors.push('종료 날짜는 오늘로부터 90일 이내여야 합니다.');
    }
  }

  if (new Date(session.creationEndDate) < new Date(session.creationStartDate)) {
    errors.push('종료 날짜는 시작 날짜보다 같거나 뒤여야 합니다.');
  }

  session.timeRangeVos.forEach((range, index) => {
    if (
      !range.startTime ||
      !range.endTime ||
      range.dayOfWeekList.length === 0
    ) {
      errors.push(`시간 범위 ${index + 1}: 모든 값을 선택해주세요.`);
    }
    if (range.maxHeadCount < range.minHeadCount) {
      errors.push(
        `시간 범위 ${index + 1}: 최대 인원은 최소 인원보다 같거나 커야 합니다.`
      );
    }

    const startTime = parse(range.startTime, 'HH:mm', new Date());
    const endTime = parse(range.endTime, 'HH:mm', new Date());

    if (
      !isAfter(endTime, startTime) ||
      differenceInMinutes(endTime, startTime) < 30
    ) {
      errors.push(
        `시간 범위 ${index + 1}: 종료 시간은 시작 시간보다 최소 30분 뒤여야 합니다.`
      );
    }
  });

  return errors;
};

export function SessionAddModal({
  isOpen,
  onClose,
  onSubmit,
}: AddMentoringSessionModalProps) {
  const [session, setSession] = useState<MentoringSession>({
    mentoringUuid: '',
    creationStartDate: '',
    creationEndDate: '',
    timeRangeVos: [initialTimeRange],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSession((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeRangeChange = (
    index: number,
    field: keyof TimeRange,
    value: string | number | string[]
  ) => {
    setSession((prev) => ({
      ...prev,
      timeRangeVos: prev.timeRangeVos.map((range, i) =>
        i === index ? { ...range, [field]: value } : range
      ),
    }));
  };

  const addTimeRange = () => {
    if (session.timeRangeVos.length < 5) {
      setSession((prev) => ({
        ...prev,
        timeRangeVos: [...prev.timeRangeVos, initialTimeRange],
      }));
    } else {
      alert('최대 5개의 시간 범위만 추가할 수 있습니다.');
    }
  };

  const removeTimeRange = (index: number) => {
    if (session.timeRangeVos.length > 1) {
      setSession((prev) => ({
        ...prev,
        timeRangeVos: prev.timeRangeVos.filter((_, i) => i !== index),
      }));
    } else {
      alert('최소 하나의 시간 범위가 필요합니다.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateSession(session);
    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onSubmit(session);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[40rem] max-h-[80vh] overflow-y-auto p-10">
        <DialogHeader>
          <DialogTitle>멘토링 세션 추가</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="creationStartDate" className="text-right">
                시작 날짜
              </Label>
              <Input
                id="creationStartDate"
                name="creationStartDate"
                type="date"
                min={addDays(new Date(), 1).toISOString().split('T')[0]}
                max={addDays(new Date(), 90).toISOString().split('T')[0]}
                value={session.creationStartDate}
                onChange={handleInputChange}
                className="col-span-4"
                required
              />
            </div>
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="creationEndDate" className="text-right">
                종료 날짜
              </Label>
              <Input
                id="creationEndDate"
                name="creationEndDate"
                type="date"
                min={
                  session.creationStartDate ||
                  addDays(new Date(), 1).toISOString().split('T')[0]
                }
                max={addDays(new Date(), 90).toISOString().split('T')[0]}
                value={session.creationEndDate}
                onChange={handleInputChange}
                className="col-span-4"
                required
              />
            </div>
            {session.timeRangeVos.map((range, index) => (
              <div key={index} className="border p-4 rounded relative">
                <h4 className="mb-2">시간 범위 {index + 1}</h4>
                {session.timeRangeVos.length > 1 && (
                  <X
                    className="absolute top-2 right-2 cursor-pointer text-red-500 rounded-full"
                    onClick={() => removeTimeRange(index)}
                  />
                )}
                <div className="grid grid-cols-5 items-center gap-4">
                  <Label htmlFor={`startTime-${index}`} className="text-right">
                    시작 시간
                  </Label>
                  <Input
                    id={`startTime-${index}`}
                    type="time"
                    value={range.startTime}
                    onChange={(e) =>
                      handleTimeRangeChange(index, 'startTime', e.target.value)
                    }
                    className="col-span-4"
                  />
                </div>
                <div className="grid grid-cols-5 items-center gap-4 mt-2">
                  <Label htmlFor={`endTime-${index}`} className="text-right">
                    종료 시간
                  </Label>
                  <Input
                    id={`endTime-${index}`}
                    type="time"
                    value={range.endTime}
                    onChange={(e) =>
                      handleTimeRangeChange(index, 'endTime', e.target.value)
                    }
                    className="col-span-4"
                  />
                </div>
                <div className="grid grid-cols-5 items-center gap-4 mt-2">
                  <Label
                    htmlFor={`minHeadCount-${index}`}
                    className="text-right"
                  >
                    최소 인원
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleTimeRangeChange(
                        index,
                        'minHeadCount',
                        parseInt(value)
                      )
                    }
                    value={range.minHeadCount.toString()}
                  >
                    <SelectTrigger className="col-span-4">
                      <SelectValue placeholder="Select min head count" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-5 items-center gap-4 mt-2">
                  <Label
                    htmlFor={`maxHeadCount-${index}`}
                    className="text-right"
                  >
                    최대 인원
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleTimeRangeChange(
                        index,
                        'maxHeadCount',
                        parseInt(value)
                      )
                    }
                    value={range.maxHeadCount.toString()}
                  >
                    <SelectTrigger className="col-span-4">
                      <SelectValue placeholder="Select max head count" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        { length: 5 - range.minHeadCount + 1 },
                        (_, i) => i + range.minHeadCount
                      ).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-5 items-center gap-4 mt-2">
                  <Label htmlFor={`price-${index}`} className="text-right">
                    가격
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleTimeRangeChange(index, 'price', parseInt(value))
                    }
                    value={range.price.toString()}
                  >
                    <SelectTrigger className="col-span-4">
                      <SelectValue placeholder="Select price" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 90 }, (_, i) => i * 10 + 100).map(
                        (price) => (
                          <SelectItem key={price} value={price.toString()}>
                            {price.toLocaleString()} Volt
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-2">
                  <Label>요일</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`ALL-${index}`}
                        checked={range.dayOfWeekList.length === 7}
                        onChange={(e) => {
                          const allDays = [
                            'MONDAY',
                            'TUESDAY',
                            'WEDNESDAY',
                            'THURSDAY',
                            'FRIDAY',
                            'SATURDAY',
                            'SUNDAY',
                          ];
                          handleTimeRangeChange(
                            index,
                            'dayOfWeekList',
                            e.target.checked ? allDays : []
                          );
                        }}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`ALL-${index}`}
                        className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                      >
                        ALL
                      </label>
                    </div>
                    {[
                      'MONDAY',
                      'TUESDAY',
                      'WEDNESDAY',
                      'THURSDAY',
                      'FRIDAY',
                      'SATURDAY',
                      'SUNDAY',
                    ].map((day) => (
                      <div key={day} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${day}-${index}`}
                          checked={range.dayOfWeekList.includes(day)}
                          onChange={(e) => {
                            const newDayList = e.target.checked
                              ? [...range.dayOfWeekList, day]
                              : range.dayOfWeekList.filter((d) => d !== day);
                            handleTimeRangeChange(
                              index,
                              'dayOfWeekList',
                              newDayList
                            );
                          }}
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`${day}-${index}`}
                          className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                        >
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Button
              type="button"
              onClick={addTimeRange}
              className="bg-adaptorsYellow hover:bg-black font-bold !text-lg"
            >
              시간 범위 추가
            </Button>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-adaptorsYellow hover:bg-black font-bold !text-lg"
            >
              멘토링 세션 추가
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
