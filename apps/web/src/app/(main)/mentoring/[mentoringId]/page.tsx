import MentoringDetail from '../../../../components/pages/main/mentoring/MentoringDetail';

async function Page({
  searchParams,
}: {
  searchParams: { selectedDate: string; scrollY?: string };
}) {
  const selectedDate = searchParams.selectedDate || '';

  return (
    <main className="mt-14 py-2 px-4 min-h-screen bg-gray-50">
      <MentoringDetail mentoringDate={selectedDate} />
    </main>
  );
}

export default Page;
