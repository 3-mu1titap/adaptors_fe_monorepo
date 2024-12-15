'use client';
import React from 'react';
import LikeCard from './LikeCard';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
import { useSession } from 'src/app/context/SessionContext';
function LikePage({ like }: { like: BestMentorType[] }) {
  const session = useSession();
  return (
    <div className="flex flex-col">
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
          <div></div>
        )}
      </ul>
    </div>
  );
}

export default LikePage;
