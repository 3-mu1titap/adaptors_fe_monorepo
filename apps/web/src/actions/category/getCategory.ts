import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import { commonResType } from '@repo/web/components/types/ResponseTypes';

export async function getTopCategoryList(): Promise<TopCategoryType[]> {
  try {
    const res = await fetch(
      `http://api.adaptors.site/category-service/api/v1/category/top-categories`,
      {
        // cache: 'force-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          tags: ['category-update'],
        },
      }
    );
    const result = (await res.json()) as commonResType<TopCategoryType[]>;
    return result.result;
  } catch (error) {
    console.error('카테고리 조회 에러: ', error);
    return [];
  }
}
