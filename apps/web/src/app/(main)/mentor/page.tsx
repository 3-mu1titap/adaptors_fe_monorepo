import React from 'react';
import MentorListTitle from '@repo/web/components/pages/mentor/mentor/MentorListTitle';
import MentorAllList from '@repo/web/components/pages/mentor/mentor/MentorAllList';

const mentorList = [
  {
    mentorUuid: 'd9fb8103-9591-4b6e-a1ca-9f1cd07452aa',
    nickName: '취업가이드주원',
    profileImageUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734268708431-이제훈.JPG',
    totalReviewCount: 7,
    reviewStarAvg: 4.1429,
    totalLikeCount: 95,
    totalSaleCount: 210,
  },
];

async function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            멘토 리스트
          </h1>
        </div>
      </header>
      <main>
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <MentorListTitle />
          <MentorAllList />
        </div>
      </main>
    </div>
  );
}

export default Page;
