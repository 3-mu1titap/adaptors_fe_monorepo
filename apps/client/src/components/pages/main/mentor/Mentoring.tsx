import { MentoringDataType } from '../../../types/main/mentor/mentoringTypes';
import MentoringListCard from './MentoringListCard';

function Mentoring({
  mentoringListData,
}: {
  mentoringListData: MentoringDataType[];
}) {
  return (
    <section className="flex flex-wrap justify-between m-4 ml-8">
      {mentoringListData?.map((mentoring: MentoringDataType, index: number) => (
        <MentoringListCard key={index} mentoring={mentoring} />
      ))}
    </section>
  );
}

export default Mentoring;
