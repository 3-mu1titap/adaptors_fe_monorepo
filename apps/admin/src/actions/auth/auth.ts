'use server';

import { commonResType } from '@repo/client/components/types/ResponseTypes';

export async function postUserData(userData: {
  name: string;
  nickName: string;
  email: string;
  accountId: string;
  password: string;
  phoneNumber: string;
  role: string;
}): Promise<any> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH}/sign-up`, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userData: userData,
      }),
    });
    const result = (await res.json()) as commonResType<any[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return [];
  }
}
export async function findId(email: string): Promise<any> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH}/find-id`, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const result = (await res.json()) as commonResType<any[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return [];
  }
}

export async function resetPassword(accountId: string): Promise<any> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH}/reset-password`, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accountId: accountId,
      }),
    });
    const result = (await res.json()) as commonResType<any[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return [];
  }
}
export async function checkAccountId(accountId: string): Promise<any> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH}/cheak-accountId`, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accountId: accountId,
      }),
    });
    const result = (await res.json()) as commonResType<any[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return [];
  }
}
