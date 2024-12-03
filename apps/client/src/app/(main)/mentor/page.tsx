import { GetMentoringList } from '@repo/client/actions/mentoring/mentoringAction';
import MentoringHeader from '@repo/client/components/header/MentoringHeader';
import Mentoring from '@repo/client/components/pages/main/mentor/mentoring/Mentoring';
import { MentoringDataType } from '@repo/client/components/types/main/mentor/mentoringTypes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Home`,
};

export default async function Page() {
  const mentoringListData: MentoringDataType[] = await GetMentoringList();
  return (
    <main className="mx-4 mt-2">
      <MentoringHeader mentoringListData={mentoringListData} />
      <Mentoring mentoringListData={mentoringListData} />
    </main>
  );
}
