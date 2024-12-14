'use server';
import { commonResType } from '@repo/web/components/types/ResponseTypes';

export interface result {
  suggestedNames: SuggestedNames;
}
export interface SuggestedNames {
  name: string;
}

export const getSuggestedName = async (inputWord: string): Promise<any> => {
  try {
    const response = await fetch(
      `http://10.10.10.20:9001/api/v1/mentoring-query-service/elastic/${inputWord}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch suggestions');
    }

    const data = (await response.json()) as commonResType<result>;
    console.log(data.result.suggestedNames);
    return data.result.suggestedNames || [];
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};
