import React from 'react';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
import RateViewer from '@repo/web/components/common/RateViwer';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
import { ShoppingCartIcon } from 'lucide-react';
import FitImage from '@repo/web/components/ui/image/fit-image';
function BestMentorCard({
  item,
  isRole,
  index,
}: {
  item: BestMentorType;
  isRole: any;
  index: number;
}) {
  return (
    <Link href={`/mentor/${item.mentorUuid}?role=${isRole}`}>
      <div className=" bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 py-4 transition-all">
        <div className="flex gap-x-2">
          <div className="bg-yellow-400  text-white text-sm font-bold px-4 ml-3 py-1 rounded-md shadow-md">
            {index + 1}등
          </div>

          <span className="bg-slate-300 px-2 py-1 font-bold text-sm text-white rounded-lg">
            베스트 멘토
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <FitImage
              className={`object-contain ${item.profileImageUrl === 'none' ? 'bg-gray-400' : ' '}`}
              src={item.profileImageUrl === 'none' ? '' : item.profileImageUrl}
              alt=""
            />
          </div>
          <span className="text-xl font-bold mt-4 text-gray-600">
            {item.nickName}
          </span>
        </div>

        <div className="flex mt-5 items-center gap-x-7 justify-center">
          <div className="flex flex-col mb-2 justify-start gap-y-1">
            <RateViewer
              rateData={item.reviewStarAvg}
              size="1.0rem"
              color={'#ffd84d'}
            />
            <span className="text-sm text-gray-500 text-center">
              ({item.totalReviewCount})
            </span>
          </div>

          <div className="flex flex-col mt-2 mb-2 justify-center gap-y-1">
            <HeartIcon className="w-[19px] h-[19px] " />
            <span className="text-sm text-gray-500 text-center">
              ({item.totalLikeCount})
            </span>
          </div>

          <div className="flex flex-col mt-2 mb-2 justify-end gap-y-1">
            <ShoppingCartIcon className="w-[19px] h-[19px] " />
            <span className="text-sm text-gray-500 text-center ">
              {item.totalSaleCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BestMentorCard;
