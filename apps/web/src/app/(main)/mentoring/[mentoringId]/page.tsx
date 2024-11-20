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
  searchParams: { selectedDate: string; scrollY?: string };
}) {
  const selectedDate = searchParams.selectedDate || '';
  const scrollY = searchParams.scrollY || '0';

  return (
    <main className="my-2 py-2 px-4 min-h-screen bg-gray-50">
      {/* <ScrollHandler scrollY={scrollY} selectedDate={selectedDate} /> */}
      <MentoringDetail mentoringDate={selectedDate} />
    </main>
  );
}

export default Page;
