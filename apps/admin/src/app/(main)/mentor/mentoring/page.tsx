import { GetMentoringListByMentor } from '@repo/admin/actions/mentoring/mentoringAction';
import MentoringByMentor from '@repo/admin/components/pages/main/home/MentoringByMentor';

async function page() {
  const mentoringListData = await GetMentoringListByMentor();
  return (
    <>
      {mentoringListData && (
        <MentoringByMentor mentoringListData={mentoringListData} />
      )}
    </>
  );
}

export default page;
