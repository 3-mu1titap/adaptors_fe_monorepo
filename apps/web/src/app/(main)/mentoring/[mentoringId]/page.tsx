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
  searchParams: { selectedDate: string };
}) {
  const selectedDate = searchParams.selectedDate || '';

  return (
    <main className="my-2 py-2 px-4 min-h-screen bg-gray-50">
      <div className="container flex ">
        <MentoringDetail mentoringDate={selectedDate} />
      </div>
    </main>
  );
}

export default Page;
