import { Category } from '@repo/ui/types/CommonType.js';
import { commonResType } from '@repo/web/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { options } from 'src/app/api/auth/[...nextauth]/options';

export async function getTopCategoryList(): Promise<Category[]> {
  const session = getServerSession(options);
  // const accessToken = session?.user.accessToken;s
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/category/top-categories`,
      {
        cache: 'force-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'token': `bearer ${accessToken}`,
        },
        next: {
          tags: ['category-update'],
        },
      }
    );
    const result = (await res.json()) as commonResType<Category[]>;
    return result.result;
  } catch (error) {
    console.error('카테고리 조회 에러: ', error);
    return [];
  }
}
