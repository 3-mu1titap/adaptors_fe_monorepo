import { MentoringDataType } from '@repo/admin/components/types/main/mentor/mentoringTypes';
import MentoringListCard from './MentoringListCard';

function Mentoring({
  mentoringListData,
}: {
  mentoringListData: MentoringDataType[];
}) {
  return (
    <section className="px-10 py-5">
      {mentoringListData?.map((mentoring: MentoringDataType, index: number) => (
        <MentoringListCard key={index} mentoring={mentoring} />
      ))}
    </section>
  );
}

export default Mentoring;
