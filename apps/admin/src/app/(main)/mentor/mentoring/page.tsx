import { GetMentoringListByMentor } from '@repo/admin/actions/mentoring/mentoringAction';
import MentoringByMentor from '@repo/admin/components/pages/main/home/MentoringByMentor';

async function page() {
  const mentoringListData = await GetMentoringListByMentor();
  mentoringListData.map((d) => {
    console.log(d.mentoringUuid, d.thumbnailUrl);
  });
  return (
    <>
      {mentoringListData && (
        <MentoringByMentor mentoringListData={mentoringListData} />
      )}
    </>
  );
}

export default page;
