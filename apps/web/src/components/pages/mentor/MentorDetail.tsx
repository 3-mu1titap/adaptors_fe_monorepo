import React from 'react';
import MentoringCard from './MentoringCard';
import { CommonLayout } from '@components/common/commomLayout';
import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import { GetMentoringSessionList } from 'src/actions/mentoring/mentoringAction';
import MentorDetailProfile from './MentorDetailProfile';
import { userProfileType } from '@components/types/profile/RequestType';

function MentorDetail({
  mentorlistItme,
  userProfile,
}: {
  mentorlistItme: MentorMentoringListDataType[];
  userProfile: userProfileType;
}) {
  return (
    <>
      <CommonLayout className="h-auto mx-10 mt-2 flex space-x-20">
        <div className="min-w-[12rem]flex flex-col">
          <MentorDetailProfile userProfile={userProfile} />
        </div>

        <div className="flex flex-col mt-3">
          {/* 멘토 소개글 레이아웃 */}
          <div className="flex flex-col space-y-4 min-h-[160px]">
            <span className="text-xl font-bold text-black">소개글</span>
            <span className="text-black text-md">
              안녕하십니까 네이버에서 프론트엔드 직무로 4년간 일을 했습니다.
              제가 만든 UI가 사용자와 상호작용을 하는 것을 좋아합니다 앞으로도
              고도화된 기술과 UX의 역량을 쌓아 사용자와 상호작용할 수 있는
              프론트엔드가 되고 싶습니다
            </span>
          </div>

          <div className="py-3 min-h-screen">
            <h2 className="text-2xl font-bold mb-8">진행중인 멘토링</h2>

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
        </div>
      </CommonLayout>
    </>
  );
}

export default MentorDetail;
