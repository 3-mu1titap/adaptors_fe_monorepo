import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MentoringDataType } from '../../../types/main/mentor/mentoringTypes';

function MentoringListCard({ mentoring }: { mentoring: MentoringDataType }) {
  console.log(mentoring);
  return (
    <div className="rounded w-full min-w-[320px] min-h-[368px] md:w-[48%] lg:w-[48%] xl:w-[32%] 2xl:w-[24%] bg-white mb-4 border border-[#E5E5E5] hover:shadow-xl transition duration-300 hover:border-adaptorsBlue relative">
      <div className="w-full h-[200px] overflow-hidden rounded-t-lg">
        <Link href={`/mentor/mentoring/${mentoring.mentoringUuid}`}>
          <Image
            src={mentoring.thumbnailUrl}
            alt="더미"
            width={1920}
            height={1080}
            className="object-cover overflow-clip scale-105 hover:scale-125 transition duration-300 hover:filter hover:contrast-125"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3 py-4 px-6">
        <h2 className="text-xl font-bold">{mentoring.name}</h2>
        {/* <div className="text-xs">{mentoring.detail}</div> */}
        <div className="flex justify-between items-end mt-4">
          <ul className="flex flex-wrap justify-start items-center gap-1">
            {mentoring.mentoringCategoryList[0].topCategoryName && (
              <li className="text-xs text-black px-2 py-1 rounded-md">
                {mentoring.mentoringCategoryList[0].topCategoryName}
              </li>
            )}
            {mentoring.mentoringCategoryList[0].middleCategoryName && (
              <li className="text-xs text-black px-2 py-1 rounded-md">
                {mentoring.mentoringCategoryList[0].middleCategoryName}
              </li>
            )}
          </ul>
          <Link
            className="bg-adaptorsGray text-sm rounded-xl px-4 py-2 text-white hover:bg-adaptorsBlue font-extrabold"
            href={`/mentor/mentoring/${mentoring.mentoringUuid}`}
          >
            멘토링 관리하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MentoringListCard;
