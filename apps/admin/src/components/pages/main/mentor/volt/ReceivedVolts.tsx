'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { mentorVoltListDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';
import { formatDate } from '@repo/admin/components/utils/dateUtil';

export default function ReceivedVolts({
  mentorVoltList,
}: {
  mentorVoltList: mentorVoltListDataType;
}) {
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>보유한 볼트</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">
            {mentorVoltList ? mentorVoltList.totalVolt : 0} 볼트
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>받은 볼트</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mentorVoltList &&
              mentorVoltList.voltList.map((record) => (
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
    </>
  );
}
