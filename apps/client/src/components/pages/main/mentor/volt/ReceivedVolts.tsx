'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import { Button } from '@repo/ui/components/ui/button';

interface VoltRecord {
  id: number;
  amount: number;
  date: string;
  sender: string;
}

const mockData: VoltRecord[] = [
  { id: 1, amount: 100, date: '2023-06-01', sender: '김멘티' },
  { id: 2, amount: 200, date: '2023-06-02', sender: '이학생' },
  { id: 3, amount: 150, date: '2023-06-03', sender: '박배움' },
];

export default function ReceivedVolts() {
  const [exchangeAmount, setExchangeAmount] = useState<string>('');
  const totalVolts = mockData.reduce((sum, record) => sum + record.amount, 0);

  const handleExchange = () => {
    if (exchangeAmount && parseInt(exchangeAmount) > 0) {
      alert(`${exchangeAmount} 볼트를 환전합니다.`);
      setExchangeAmount('');
    } else {
      alert('올바른 환전 금액을 입력해주세요.');
    }
  };

  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>총 받은 볼트</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{totalVolts} 볼트</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>볼트 내역</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mockData.map((record) => (
              <li
                key={record.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{record.amount} 볼트</p>
                  <p className="text-sm text-gray-500">{record.date}</p>
                </div>
                <p>{record.sender}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>볼트 환전</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              type="number"
              placeholder="환전할 볼트 수"
              value={exchangeAmount}
              onChange={(e) => setExchangeAmount(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleExchange}>환전하기</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
