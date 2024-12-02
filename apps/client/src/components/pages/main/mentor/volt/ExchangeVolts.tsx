'use client';

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { Button } from '@repo/ui/components/ui/button';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@repo/ui/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/ui/components/ui/popover';

interface DateRange {
  from: Date;
  to: Date;
}

interface ExchangeRecord {
  id: number;
  date: string;
  volt: number;
  status: 'processing' | 'complete';
  money: number;
}

const mockData: ExchangeRecord[] = [
  { id: 1, date: '2024-06-01', volt: 100, status: 'complete', money: 10000 },
  { id: 2, date: '2023-06-02', volt: 200, status: 'processing', money: 20000 },
  { id: 3, date: '2024-12-01', volt: 150, status: 'complete', money: 15000 },
];

const filterData = (
  data: ExchangeRecord[],
  selectedPeriod: string,
  selectedDateRange: DateRange
) => {
  const today = new Date();
  let startDate = new Date();
  let endDate = new Date();

  switch (selectedPeriod) {
    case '오늘':
      startDate.setHours(0, 0, 0, 0);
      break;
    case '1주일':
      startDate.setDate(today.getDate() - 7);
      break;
    case '1개월':
      startDate.setMonth(today.getMonth() - 1);
      break;
    case '기간 선택':
      startDate = selectedDateRange.from;
      endDate = selectedDateRange.to;
      break;
    default:
      return data;
  }

  return data.filter((record) => {
    const recordDate = new Date(record.date);
    return recordDate >= startDate && recordDate <= endDate;
  });
};

export default function ExchangeHistory() {
  const [period, setPeriod] = useState<string>('오늘');
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [filteredData, setFilteredData] = useState<ExchangeRecord[]>(mockData);

  useEffect(() => {
    setFilteredData(filterData(mockData, period, dateRange));
  }, [period, dateRange]);

  const totalProcessing = filteredData.filter(
    (record) => record.status === 'processing'
  ).length;

  const totalComplete = filteredData.filter(
    (record) => record.status === 'complete'
  ).length;

  const totalMoney = filteredData.reduce(
    (sum, record) => sum + record.money,
    0
  );

  const handleCancel = (id: number) => {
    alert(`ID ${id}의 환전을 취소합니다.`);
  };

  const handleDateRangeSelect = (range: DateRange | undefined) => {
    if (range && range.from && range.to) {
      setDateRange({ from: range.from, to: range.to });
    } else {
      setDateRange({ from: new Date(), to: new Date() });
    }
  };

  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>기간 선택</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-4">
          <Select onValueChange={setPeriod} defaultValue={period}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="기간 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="오늘">오늘</SelectItem>
              <SelectItem value="1주일">1주일</SelectItem>
              <SelectItem value="1개월">1개월</SelectItem>
              <SelectItem value="기간 선택">기간 선택</SelectItem>
            </SelectContent>
          </Select>
          {period === '기간 선택' && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={`w-[300px] justify-start text-left font-normal ${
                    !dateRange.from && 'text-muted-foreground'
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, 'LLL dd, y')} -{' '}
                        {format(dateRange.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(dateRange.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>기간을 선택하세요</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={handleDateRangeSelect}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          )}
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>총 정산 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">총 정산대기</p>
              <p className="text-2xl font-bold">{totalProcessing}건</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">총 정상 완료</p>
              <p className="text-2xl font-bold">{totalComplete}건</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">총 정산 금액</p>
              <p className="text-2xl font-bold">
                {totalMoney.toLocaleString()}원
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>환전 내역</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {filteredData.map((record) => (
              <li
                key={record.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{record.volt} 볼트</p>
                  <p className="text-sm text-gray-500">{record.date}</p>
                </div>
                <div className="text-right">
                  <p>{record.money.toLocaleString()}원</p>
                  <p
                    className={`text-sm ${record.status === 'complete' ? 'text-green-500' : 'text-yellow-500'}`}
                  >
                    {record.status === 'complete' ? '완료' : '처리 중'}
                  </p>
                </div>
                {record.status === 'processing' && (
                  <Button
                    variant="destructive"
                    onClick={() => handleCancel(record.id)}
                  >
                    취소
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
