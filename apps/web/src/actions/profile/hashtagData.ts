'use server';
import { commonResType } from '../../components/types/ResponseTypes';
import { URLfetch } from '../common/common';

export interface Tag {
  name: string;
  hashtagId: number;
}

export const getTagList = async (): Promise<Tag[]> => {
  'use server';
  const data = await URLfetch<commonResType<Tag[]>>({
    method: 'GET',
    apiUrl: `http://10.10.10.47:8080/api/v1/admin/hashtag`,
  });
  return data.result;
};

type Hashtag = {
  hashtagId: number;
};

type HashtagArray = Hashtag[];

export const addTagList = async (
  uuid: string,
  hashtags: HashtagArray // 배열로 받음
): Promise<any> => {
  'use server';
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  console.log('hashtags', hashtags);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-service/api/v1/member/hashtag`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Uuid': uuid,
      },
      body: JSON.stringify(hashtags),
    }
  );

  console.log(JSON.stringify(hashtags));

  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post hash tags');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};
