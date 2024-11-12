import { GetMentoringSessionList } from '../../../../actions/mentoring/mentoringAction';
import MentoringDetail from '../../../../components/pages/main/mentoring/MentoringDetail';

async function Page() {
  const mentoringSessionList = await GetMentoringSessionList();
  return (
    <main className="my-2 py-2 px-4">
      <div className="container flex min-h-screen bg-gray-50">
        <MentoringDetail mentoringSessionList={mentoringSessionList} />
      </div>
    </main>
  );
}

export default Page;
