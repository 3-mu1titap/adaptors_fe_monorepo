'use client';

import React, { useState, useEffect } from 'react';
import SelectPeriod from './exchange/SelectPeriod';
import TotalExchange from './exchange/TotalExchange';
import SettleList from './exchange/SettleList';
import { GetSettleList } from '@repo/client/actions/volt/voltAction';
import { exchangeDataType } from '@repo/client/components/types/main/mypage/myPageTypes';
import { DateRange } from 'react-day-picker'; // 동일한 모듈에서 가져오기
import { formatDate } from '@repo/client/components/utils/dateUtil';

export default function ExchangeHistory() {
  const [period, setPeriod] = useState<string>('오늘');
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [totalExchange, setTotalExchange] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<exchangeDataType[]>([]);
  const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

  useEffect(() => {
    const fetchData = async () => {
      try {
        let startDate: string;
        let endDate: string;

        const today = new Date();
        switch (period) {
          case '오늘':
            startDate = today.toISOString().split('T')[0].split('-').join('');
            endDate = today.toISOString().split('T')[0].split('-').join('');
            break;
          case '1주일':
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(today.getDate() - 7);
            startDate = oneWeekAgo
              .toISOString()
              .split('T')[0]
              .split('-')
              .join('');
            endDate = today.toISOString().split('T')[0].split('-').join('');
            break;
          case '1개월':
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(today.getMonth() - 1);
            startDate = oneMonthAgo
              .toISOString()
              .split('T')[0]
              .split('-')
              .join('');
            endDate = today.toISOString().split('T')[0].split('-').join('');
            break;
          case '기간 선택':
            if (dateRange.from && dateRange.to) {
              startDate = dateRange.from
                .toISOString()
                .split('T')[0]
                .split('-')
                .join('');

              endDate = dateRange.to
                .toISOString()
                .split('T')[0]
                .split('-')
                .join('');
            } else {
              startDate = formatDate('day', new Date());
              endDate = formatDate('day', new Date());
            }
            break;
          default:
            return;
        }

        const data = await GetSettleList(startDate, endDate, userUuid);
        setTotalExchange(data.totalExchange);
        setFilteredData(data.exchangeList);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [period, dateRange.from, dateRange.to]);

  const totalProcessing = filteredData.filter(
    (record) => record.status === 'PROCEEDING'
  ).length;

  const totalComplete = filteredData.filter(
    (record) => record.status === 'COMPLETED'
  ).length;

  const totalMoney = filteredData.reduce(
    (sum, record) => sum + record.money,
    0
  );

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

      {!filteredData ? (
        <p>기간을 선택해주세요.</p>
      ) : !totalExchange ? (
        <p>환전 내역이 없습니다.</p>
      ) : (
        <SettleList filteredData={filteredData} />
      )}
    </>
  );
}
