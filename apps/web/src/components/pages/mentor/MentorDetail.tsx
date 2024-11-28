import React from 'react';
import MentoringCard from './MentoringCard';
import { CommonLayout } from '@components/common/commomLayout';
import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import { GetMentoringSessionList } from 'src/actions/mentoring/mentoringAction';
function MentorDetail({
  mentorlistItme,
}: {
  mentorlistItme: MentorMentoringListDataType[];
}) {
  return (
    <>
      <CommonLayout className="h-auto mx-20 mt-6 flex">
        <div className="min-w-[10rem] flex flex-col bg-red-600">
          여기는 멘토의 프로필 레이아웃
        </div>

        <div>
          <h2 className="text-4xl font-bold mt-2 mb-12">멘토링 리스트</h2>
          {mentorlistItme && mentorlistItme.length > 0 ? (
            <ul className="grid gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-x-6 max-w-[71rem] justify-items-stretch">
              {mentorlistItme.map((item, index) => (
                <MentoringCard key={index} item={item} />
              ))}
            </ul>
          ) : (
            <div className="text-gray-400 text-base">
              현재 진행중인 멘토링이 없습니다.
            </div>
          )}
        </div>
      </CommonLayout>
    </>
  );
}

export default MentorDetail;
