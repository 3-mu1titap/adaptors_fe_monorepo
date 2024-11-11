import { MentoringDataType } from '../../../types/main/mentor/mentoringTypes';
import MentoringListCard from './MentoringListCard';

function Mentoring({
  mentoringListData,
}: {
  mentoringListData: MentoringDataType[];
}) {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {mentoringListData?.map((mentoring: MentoringDataType, index: number) => (
        <MentoringListCard key={index} mentoring={mentoring} />
      ))}
    </section>
  );
}

export default Mentoring;
