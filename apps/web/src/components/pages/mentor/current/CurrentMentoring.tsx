import React from 'react';
import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import CurrentMentoringCard from './CurrentMentoringCard';
import MentorTitleSection from '../compoent/MentorTitleSection';
function CurrentMentoring({ item }: { item: MentorMentoringListDataType[] }) {
  return (
    <div className="py-3 h-auto min-h-[55rem] min-w-[58rem] bg-white p-6 rounded-xl mt-10">
      <MentorTitleSection
        title="현재 진행중인 멘토링"
        subtitle="current Mentoring"
      />
      {item && item.length > 0 ? (
        <ul className="grid gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-8 max-w-[58rem] justify-items-stretch">
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
