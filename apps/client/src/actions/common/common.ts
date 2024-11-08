'use server';

import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
  method: HttpMethod;
  apiUrl: string;
  body?: any;
  cache?: RequestCache;
  tags?: string[];
  revalidate?: number;
}

// 토큰이 필요없는 API 요청
export const fetchData = async <T>({
  method,
  apiUrl,
  body,
  cache = 'default',
  tags,
  revalidate,
}: FetchOptions): Promise<T> => {
  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    cache,
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  if (tags) {
    fetchOptions.next = { tags };
  }

  if (revalidate !== undefined) {
    fetchOptions.next = { ...fetchOptions.next, revalidate };
  }

  const res = await fetch(`${process.env.BACKEND_URL}${apiUrl}`, fetchOptions);

  return res.json();
};

// 인증이 필요한 API 요청
export const fetchAuthData = async <T>({
  method,
  apiUrl,
  body,
  cache = 'default',
  tags,
  revalidate,
}: FetchOptions): Promise<T> => {
  const session: Session | null = await getServerSession();
  let token = session?.user.accessToken;

  if (!token) {
    throw new Error('No authentication token available');
  }

  const makeRequest = async (authToken: string) => {
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      cache,
    };

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    if (tags) {
      fetchOptions.next = { tags };
    }

    if (revalidate !== undefined) {
      fetchOptions.next = { ...fetchOptions.next, revalidate };
    }

    return fetch(`${process.env.BACKEND_URL}${apiUrl}`, fetchOptions);
  };

  // 첫 번째 요청 시도 (accessToken 사용)
  let res = await makeRequest(token);

  // 401 에러시 refreshToken으로 재시도
  if (res.status === 401 && session?.user.refreshToken) {
    // refreshToken으로 새로운 accessToken 발급 요청
    const refreshRes = await fetch(`${process.env.BACKEND_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: session.user.refreshToken }),
    });

    if (!refreshRes.ok) {
      throw new Error('Token refresh failed');
    }

    const { accessToken: newToken } = await refreshRes.json();
    // 새로운 토큰으로 원래 요청 재시도
    res = await makeRequest(newToken);
  }

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  return res.json();
};
