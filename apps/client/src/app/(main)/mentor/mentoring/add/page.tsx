import { GetTopCategoryList } from '../../../../../actions/mentoring/mentoringAction';
import MentoringAddForm from '../../../../../components/form/MentoringAddForm';

export default async function Page() {
  const topCategories = await GetTopCategoryList();
  return (
    <main className="w-full">
      <MentoringAddForm topCategories={topCategories} />
    </main>
  );
}
