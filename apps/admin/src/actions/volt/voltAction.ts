'use server';

import {
  mentorVoltListDataType,
  settleDataType,
  settleListDataType,
} from '@repo/admin/components/types/main/mypage/myPageTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import { redirect } from 'next/navigation';
import { getChatProfile } from '../chatting/chattingAction';
import { getServerSession } from 'next-auth';
import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';

// 기간 별 정산 내역 API
export async function GetSettleList(startDate: string, endDate: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.PAYMENT_URL}/api/v1/payment/settle/points?startDate=${startDate}&endDate=${endDate}&mentorUuid=${userUuid}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('기간 별 정산 내역 조회 실패');
    return redirect('/error?message=Failed to fetch settle list');
  }

  const result = (await res.json()) as commonResType<settleListDataType>;
  return result.result;
}

// 받은 볼트 API
export async function GetMentorVolts() {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.PAYMENT_URL}/api/v1/payment/settle/mentorUuid=${userUuid}/points`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    console.error('멘토가 받은 볼트 조회 실패');
    return redirect('/error?message=Failed to fetch mentor volts');
  }

  const result = (await res.json()) as commonResType<mentorVoltListDataType>;
  if (!result.result) return { totalVolt: 0, voltList: [] };

  const voltListWithNickNames = await Promise.all(
    result.result.voltList.map(async (volt) => {
      const member = await getChatProfile({ userUuid: volt.sender });
      return { ...volt, sender: member.nickName };
    })
  );

  return {
    totalVolt: result.result.totalVolt,
    voltList: voltListWithNickNames,
  };
}

// 정산 요청
export async function PostSettle({ payload }: { payload: settleDataType }) {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(`${process.env.PAYMENT_URL}/api/v1/settle`, {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...payload, mentorUuid: userUuid }),
  });
  if (!res.ok) {
    console.error('2차 인증번호 발송 실패');
    return res.ok;
  }

  console.log('2차 인증번호 발송 성공');

  return res.ok;
}

// 2차 인증번호 발송
export async function PostSecondAuthenticationCode() {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.PAYMENT_URL}/api/v1/settle/send/random-number?userUuid=${userUuid}`,
    {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    console.error('2차 인증번호 발송 실패');
    return res.ok;
  }

  console.log('2차 인증번호 발송 성공');

  return res.ok;
}

// 2차 인증번호 확인
export async function PostCheckSecondAuthenticationCode(code: string) {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.PAYMENT_URL}/api/v1/settle/check/random-number?userUuid=${userUuid}&insertedNumber${code}`,
    {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    console.error('2차 인증번호 체크 실패');
    return res.ok;
  }

  const result = (await res.json()) as commonResType<boolean | null>;
  console.log('2차 인증번호 체크 성공', result);
  return result.result;
}

// 2차인증 후 이동 후 인증 지우기
export async function PostDeleteAuthenticationCode() {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.PAYMENT_URL}/api/v1/settle/redirect-page?userUuid=${userUuid}`,
    {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    console.error('인증 지우기 실패');
    return res.ok;
  }

  const result = (await res.json()) as commonResType<boolean | null>;
  console.log('인증 지우기 성공', result);
  return res.ok;
}
