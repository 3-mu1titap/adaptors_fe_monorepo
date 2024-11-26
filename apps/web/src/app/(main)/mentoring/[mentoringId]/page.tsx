import ScrollHandler from '@components/common/ScrollHandler/ScrollHandler';
import MentoringDetail from '../../../../components/pages/main/mentoring/MentoringDetail';

async function Page({
  searchParams,
}: {
  searchParams: { selectedDate: string; scrollY?: string };
}) {
  const selectedDate = searchParams.selectedDate || '';
  const scrollY = searchParams.scrollY || '0';

  return (
    <main className="my-2 py-2 px-4 min-h-screen bg-gray-50">
      <ScrollHandler scrollY={scrollY} selectedDate={selectedDate} />
      <MentoringDetail mentoringDate={selectedDate} />
    </main>
  );
}

export default Page;
