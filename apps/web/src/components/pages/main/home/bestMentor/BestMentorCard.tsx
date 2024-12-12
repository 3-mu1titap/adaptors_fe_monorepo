import React from 'react';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
import RateViewer from '@repo/web/components/common/RateViwer';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
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
      <div className="relative bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 py-4 transition-all">
        <div className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded-md shadow-md">
          {index + 1}등
        </div>
        <div className="p-4 mt-5">
          <div className="flex items-center gap-1 mb-2">
            <RateViewer
              rateData={item.reviewStarAvg}
              size="0.8rem"
              color={'#ffd84d'}
            />
            <span className="text-sm text-gray-500 ml-1">
              ({item.totalReviewCount})
            </span>

            <HeartIcon className="w-[12px] h-[12px] ml-3" />
            <span className="text-sm text-gray-500 ml-1">
              ({item.totalLikeCount})
            </span>
          </div>

          <span className="ml-1 text-md text-black">
            총 판매량 : {item.totalSaleCount}
          </span>

          <div className="p-4">
            <div className="flex items-center gap-2">
              <Image
                className={`w-[44px] h-[44px] rounded-full py-4 ${item.profileImageUrl === 'none' ? 'bg-gray-200' : ' '}`}
                src={
                  item.profileImageUrl === 'none' ? '' : item.profileImageUrl
                }
                width={11}
                height={11}
                alt="image"
              />
              <span className="text-sm text-gray-600">{item.nickName}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BestMentorCard;
