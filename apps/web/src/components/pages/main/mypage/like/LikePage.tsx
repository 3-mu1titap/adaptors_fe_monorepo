'use client';
import React from 'react';
import LikeCard from './LikeCard';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
import { useSession } from 'src/app/context/SessionContext';
function LikePage({ like }: { like: BestMentorType[] }) {
  const session = useSession();
  return (
    <div className="flex flex-col mt-10">
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 mobile:grid-col-1">
        {like && like ? (
          like.map((item, index) => (
            <LikeCard
              key={index}
              item={item}
              isRole={session?.role}
              index={0}
            />
          ))
        ) : (
          <div className="flex justify-center text-md text-black">
            등록된 관심멘토가 없습니다..!
          </div>
        )}
      </ul>
    </div>
  );
}

export default LikePage;
