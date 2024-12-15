import React from 'react';
import { likeInfoType } from '@repo/web/components/types/like/likeType';
import { likeResType } from '@repo/web/components/types/like/likeType';
function LikeCard({ like }: { like: likeInfoType }) {
  return (
    <li className="w-full">
      <div className="flex items-center justify-start space-x-4">
        <span className="w-[45px] h-[45px] bg-gray-400 rounded-full"></span>
        <span className=" text-2xl">{like.nickName}</span>
      </div>

      <div className="flex justify-end">
        <button className="p-2 rounded-md bg-slate-300">삭제</button>
      </div>
    </li>
  );
}

export default LikeCard;
