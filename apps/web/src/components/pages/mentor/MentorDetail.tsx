'use client';
import React from 'react';
import { CommonLayout } from '@components/common/commomLayout';
import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import CurrentMentoring from './current/CurrentMentoring';
import MentorIntro from './MentorIntro';
import PopularMentoring from './Popular/PopularMentoring';
function MentorDetail({
  mentorlistItem,
}: {
  mentorlistItem: MentorMentoringListDataType[];
}) {
  return (
    <>
      <CommonLayout className="h-auto mt-2 flex-fol">
        {/* 멘토 소개 */}
        <MentorIntro />
        {/* 진행중인 멘토링 섹션 */}
        <CurrentMentoring item={mentorlistItem} />

        {/* 인기있는 멘토링 */}
        <PopularMentoring />
      </CommonLayout>
    </>
  );
}

export default MentorDetail;
