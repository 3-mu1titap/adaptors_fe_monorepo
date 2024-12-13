import { MentorMentoringListDataType } from '@repo/web/components/types/mentor/mentorType';
import MentorTitleSection from '../compoent/MentorTitleSection';
import CurrentMentoringCard from './CurrentMentoringCard';
function CurrentMentoring({ item }: { item: MentorMentoringListDataType[] }) {
  return (
    <div className="py-3 h-auto min-h-[8rem] bg-white p-4 rounded-xl mt-10">
      <MentorTitleSection
        title="현재 진행중인 멘토링"
        subtitle="current Mentoring"
      />

      {item && item.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-4">
          {item.map((item, index) => (
            <CurrentMentoringCard key={index} item={item} />
          ))}
        </ul>
      ) : (
        <div className="text-gray-400 text-base">
          현재 진행중인 멘토링이 없습니다.
        </div>
      )}

      <div className="h-[1px] bg-gray-200 mt-10"></div>
    </div>
  );
}

export default CurrentMentoring;
