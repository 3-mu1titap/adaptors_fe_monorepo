import {
  GetHashTagsList,
  GetTopCategoryList,
} from '@repo/client/actions/mentoring/mentoringAction';
import MentoringAddForm from '@repo/client/components/form/MentoringAddForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Create Mentoring`,
};

export default async function Page() {
  const topCategories = await GetTopCategoryList();
  const hashtags = await GetHashTagsList();
  return <MentoringAddForm topCategories={topCategories} hashtags={hashtags} />;
}
