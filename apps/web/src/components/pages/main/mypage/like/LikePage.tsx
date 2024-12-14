import React from 'react';
import LikeCard from './LikeCard';
import { likeInfoType } from '@repo/web/components/types/like/likeType';
import { likeResType } from '@repo/web/components/types/like/likeType';
function LikePage({ like }: { like: likeInfoType[] }) {
  return (
    <div className="container mx-auto w-full px-6">
      <div className="flex flex-col  max-w-screen-xl w-full">
        <h1 className="text-3xl font-bold py-12 px-20 mt-20 w-full mx-auto text-center">
          좋아요
        </h1>

        <ul className="flex flex-col max-w-screen-xl gap-y-4  sm:min-w-[10rem] w-full">
          {like.map((item, index) => (
            <LikeCard key={index} like={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LikePage;
