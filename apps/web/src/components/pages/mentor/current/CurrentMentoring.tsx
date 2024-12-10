import { MentorMentoringListDataType } from '@repo/web/components/types/mentor/mentorType';
import MentorTitleSection from '../compoent/MentorTitleSection';
import CurrentMentoringCard from './CurrentMentoringCard';
function CurrentMentoring({ item }: { item: MentorMentoringListDataType[] }) {
  return (
    <div className="py-3 h-auto min-h-[30rem] lg:max-w-[50rem] md:max-w-[40rem] bg-white p-4 rounded-xl mt-10">
      <MentorTitleSection
        title="현재 진행중인 멘토링"
        subtitle="current Mentoring"
      />
      {item && item.length > 0 ? (
        <ul className="grid gap-y-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:max-w-[24rem] md:space-x-10 md:max-w-[50rem] mx-auto lg:max-w-[50rem] justify-items-stretch">
          {item.map((item, index) => (
            <CurrentMentoringCard key={index} item={item} />
          ))}
        </ul>
      ) : (
        <div className="text-gray-400 text-base">
          현재 진행중인 멘토링이 없습니다.
        </div>
      )}
    </div>
  );
}

export default CurrentMentoring;
