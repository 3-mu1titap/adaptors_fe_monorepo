'use client';

import React, { useState, useEffect } from 'react';
import SelectPeriod from './exchange/SelectPeriod';
import TotalExchange from './exchange/TotalExchange';
import SettleList from './exchange/SettleList';

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
      <SelectPeriod
        period={period}
        setPeriod={setPeriod}
        dateRange={dateRange}
        handleDateRangeSelect={handleDateRangeSelect}
      />

      <TotalExchange
        totalProcessing={totalProcessing}
        totalComplete={totalComplete}
        totalMoney={totalMoney}
      />

      <SettleList filteredData={filteredData} handleCancel={handleCancel} />
    </>
  );
}
