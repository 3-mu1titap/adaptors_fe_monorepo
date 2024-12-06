'use server';

export interface Tag {
  name: string;
  hashtagId: number;
}

// export const getTagList = async (): Promise<Tag[]> => {
//   'use server';
//   const data = await URLfetch<commonResType<Tag[]>>({
//     method: 'GET',
//     apiUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/hashtag-service/api/v1/admin/hashtag`,
//   });
//   console.log(data.result);
//   return data.result;
// };

type Hashtag = {
  hashtagId: number;
};

type HashtagArray = Hashtag[];

export const getTagList = async (): Promise<any> => {
  'use server';
  const response = await fetch(
    `${process.env.HASHTAG_URL}/api/v1/admin/hashtag`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post hash tags');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};

export const addTagList = async (
  uuid: string,
  hashtags: HashtagArray // 배열로 받음
): Promise<any> => {
  'use server';
  const response = await fetch(
    `${process.env.HASHTAG_URL}/api/v1/admin/hashtag`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
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
