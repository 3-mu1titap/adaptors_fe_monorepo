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
  price: 100,
  dayOfWeekList: [],
};

const validateSession = (session: MentoringSession): string[] => {
  const errors: string[] = [];
  const tomorrow = addDays(new Date(), 1);
  tomorrow.setHours(0, 0, 0, 0);

  if (new Date(session.creationStartDate) < tomorrow) {
    errors.push('시작 날짜는 내일부터 가능합니다.');
  }

  if (new Date(session.creationEndDate) < new Date(session.creationStartDate)) {
    errors.push('종료 날짜는 시작 날짜보다 같거나 뒤여야 합니다.');
  }

  session.timeRangeVos.forEach((range, index) => {
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
    value: string | number
  ) => {
    setSession((prev) => ({
      ...prev,
      timeRangeVos: prev.timeRangeVos.map((range, i) =>
        i === index ? { ...range, [field]: value } : range
      ),
    }));
  };

  const handleDayOfWeekChange = (
    index: number,
    day: string,
    checked: boolean
  ) => {
    setSession((prev) => ({
      ...prev,
      timeRangeVos: prev.timeRangeVos.map((range, i) =>
        i === index
          ? {
              ...range,
              dayOfWeekList: checked
                ? [...range.dayOfWeekList, day]
                : range.dayOfWeekList.filter((d) => d !== day),
            }
          : range
      ),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateSession(session);
    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      console.log(session);
      onSubmit(session);
    }
  };

  const addTimeRange = () => {
    setSession((prev) => ({
      ...prev,
      timeRangeVos: [...prev.timeRangeVos, initialTimeRange],
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>멘토링 세션 추가</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="mentoringUuid" className="text-right">
                멘토링 UUID
              </Label>
              <Input
                id="mentoringUuid"
                name="mentoringUuid"
                value={session.mentoringUuid}
                onChange={handleInputChange}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="creationStartDate" className="text-right">
                시작 날짜
              </Label>
              <Input
                id="creationStartDate"
                name="creationStartDate"
                type="date"
                min={addDays(new Date(), 1).toISOString().split('T')[0]}
                value={session.creationStartDate}
                onChange={handleInputChange}
                className="col-span-4"
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
                value={session.creationEndDate}
                onChange={handleInputChange}
                className="col-span-4"
              />
            </div>
            {session.timeRangeVos.map((range, index) => (
              <div key={index} className="border p-4 rounded">
                <h4 className="mb-2">시간 범위 {index + 1}</h4>
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
                  <Input
                    id={`price-${index}`}
                    type="number"
                    value={range.price}
                    onChange={(e) =>
                      handleTimeRangeChange(
                        index,
                        'price',
                        parseInt(e.target.value)
                      )
                    }
                    className="col-span-4"
                  />
                </div>
                <div className="mt-2">
                  <Label>요일</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
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
                          onChange={(e) =>
                            handleDayOfWeekChange(index, day, e.target.checked)
                          }
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`${day}-${index}`}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Button type="button" onClick={addTimeRange} className="mt-4">
              시간 범위 추가
            </Button>
          </div>
          <DialogFooter>
            <Button type="submit">멘토링 세션 추가</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
