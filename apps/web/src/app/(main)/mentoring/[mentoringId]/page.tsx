import MentoringDetail from '../../../../components/pages/main/mentoring/MentoringDetail';

async function Page({
  searchParams,
  params,
}: {
  searchParams: { selectedDate: string };
  params: { mentoringId: string };
}) {
  const selectedDate = searchParams.selectedDate || '';

  return (
    <main className="pt-[7rem] py-2 px-4 min-h-screen bg-gray-50">
      <MentoringDetail
        mentoringDate={selectedDate}
        mentoringUuid={params.mentoringId}
      />
    </main>
  );
}

export default Page;
