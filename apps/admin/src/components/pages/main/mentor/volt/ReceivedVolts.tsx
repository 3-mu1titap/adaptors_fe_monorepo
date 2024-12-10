'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import InnerButton from '@repo/admin/components/ui/Button/InnerButton';
import { mentorVoltListDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';
import { formatDate } from '@repo/admin/components/utils/dateUtil';
import Swal from 'sweetalert2';

export default function ReceivedVolts({
  mentorVoltList,
}: {
  mentorVoltList: mentorVoltListDataType;
}) {
  const [exchangeAmount, setExchangeAmount] = useState<string>('');

  const handleExchange = () => {
    if (exchangeAmount && mentorVoltList.totalVolt < parseInt(exchangeAmount)) {
      Swal.fire({
        title: '금액 초과',
        html: `${exchangeAmount}Volt는 가지고 있는<br/> ${mentorVoltList.totalVolt}를 초과하는 Volt입니다.<br/> 다시 입력해주세요.`,
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    } else if (
      parseInt(exchangeAmount) > 100 &&
      parseInt(exchangeAmount) % 100 === 0
    ) {
      Swal.fire({
        title: '환전',
        html: `${exchangeAmount}Volt 만큼 환전을 진행하시겠습니까?`,
        icon: 'question',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
      setExchangeAmount('');
    } else if (parseInt(exchangeAmount) < 100) {
      Swal.fire({
        title: '알림',
        html: `100Volt 미만으로는 환전이 불가능합니다.`,
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    } else if (parseInt(exchangeAmount) % 100 !== 0) {
      Swal.fire({
        title: '알림',
        html: `100Volt 단위로만 환전이 가능합니다.`,
        icon: 'info',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    } else {
      Swal.fire({
        title: '환전 불가',
        html: `올바른 환전 금액을 입력해주세요`,
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#F6D84C',
      });
    }
  };

  return (
    <section className="w-full px-10 py-5 mt-[5rem]">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>총 받은 볼트</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{mentorVoltList.totalVolt} 볼트</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>볼트 내역</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mentorVoltList.voltList.map((record) => (
              <li
                key={record.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <p className="font-semibold">{record.volt} 볼트</p>
                <p>{record.sender}</p>
                <p className="text-md">{formatDate('time', record.date)}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            볼트 환전
            <span className="text-md ml-2 text-gray-300">
              * 100Volt 단위로 환전이 가능합니다.
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              type="number"
              step={100}
              placeholder="환전할 볼트 수"
              value={exchangeAmount}
              onChange={(e) => setExchangeAmount(e.target.value)}
              className="flex-grow !text-xl"
            />
            <InnerButton
              title="환전하기"
              onClick={handleExchange}
              isDisabled={false}
              colorType="secondary"
              className="text-nowrap"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
