'use server';

import { commonResType } from '@repo/web/components/types/ResponseTypes';
interface PostUserDataRes {
  uuid: string;
}

export async function postUserData(userData: {
  name: string;
  nickName: string;
  email: string;
  accountId: string;
  password: string;
  phoneNumber: string;
  role: string;
}): Promise<string> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH}api/v1/auth/sign-up`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          nickName: userData.nickName,
          email: userData.email,
          accountId: userData.accountId,
          password: userData.password,
          phoneNumber: userData.phoneNumber,
          role: userData.role,
        }),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    return result.result.uuid;
  } catch (error) {
    // console.error('회원가입 에러: ', error);
    return 'error';
  }
}
export async function findId(email: string): Promise<string> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/find-id`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    console.log(result);
    return result.message;
  } catch (error) {
    console.error('아이디 찾기: ', error);
    return '아이디 찾기에 실패했습니다';
  }
}

export async function resetPassword(accountId: string): Promise<string> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/reset-password`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountId: accountId,
        }),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    return result.message;
  } catch (error) {
    console.error('비밀번호 찾기: ', error);
    return '비밀번호 찾기 실패';
  }
}
export async function checkAccountId(accountId: string): Promise<number> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/cheak-accountId`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountId: accountId,
        }),
      }
    );
    const result = (await res.json()) as commonResType<null>;
    return result.code;
  } catch (error) {
    console.error('아이디 중복검사 에러: ', error);
    return 0;
  }
}
