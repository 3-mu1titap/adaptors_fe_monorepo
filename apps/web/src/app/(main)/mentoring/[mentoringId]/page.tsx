import { GetMentoringSessionList } from '../../../../actions/mentoring/mentoringAction';
import MentoringDetail from '../../../../components/pages/main/mentoring/MentoringDetail';

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}
async function Page({
  searchParams,
}: {
  searchParams: { mentoringDate: string };
}) {
  const mentoringSessionList = await GetMentoringSessionList();
  const mentoringDate = searchParams.mentoringDate || formatDate(new Date());

  return (
    <main className="my-2 py-2 px-4">
      <div className="container flex min-h-screen bg-gray-50">
        <MentoringDetail
          mentoringSessionList={mentoringSessionList}
          mentoringDate={mentoringDate}
        />
      </div>
    </main>
  );
}

export default Page;
