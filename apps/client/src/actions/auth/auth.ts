'use server';

import { commonResType } from '../../components/types/ResponseTypes';
import { fetchData } from '../common/common';

export const postUserData = async (userData: {
  name: string;
  nickName: string;
  email: string;
  accountId: string;
  password: string;
  phoneNumber: string;
  role: string;
}): Promise<any> => {
  const data = await fetchData<commonResType<any>>({
    method: 'POST',
    apiUrl: `/api/v1/auth/sign-up`,
    body: userData,
  });
  console.log(data);
  return data;
};
