import React from 'react';
import MentorTitleSection from '../compoent/MentorTitleSection';
function PopularMentoring() {
  return (
    <div className="py-3 h-auto min-h-[55rem] min-w-[58rem] bg-white p-6 rounded-xl mt-10">
      <MentorTitleSection
        title="인기있는 멘토링"
        subtitle="popular mentoring"
      />

      <div className="grid gap-y-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-x-6 max-w-[65rem] justify-items-stretch"></div>
    </div>
  );
}

export default PopularMentoring;
