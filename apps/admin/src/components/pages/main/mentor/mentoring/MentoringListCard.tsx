import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MentoringDataType } from '@repo/client/components/types/main/mentor/mentoringTypes';

function MentoringListCard({ mentoring }: { mentoring: MentoringDataType }) {
  return (
    <div className="mb-5 min-w-[320px] flex items-center justify-center">
      <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
        <div className="py-7 px-6">
          <div className="-mt-7 mb-2 -mx-6 h-[215px] overflow-hidden">
            <Link href={`/mentor/mentoring/${mentoring.mentoringUuid}`}>
              <Image
                src={
                  mentoring.thumbnailUrl
                    ? mentoring.thumbnailUrl
                    : '/assets/images/imageDummy.jpg'
                }
                alt="더미"
                width={1920}
                height={1080}
                className="object-cover overflow-clip scale-105 hover:scale-125 transition duration-300 hover:filter hover:contrast-125"
              />
            </Link>
          </div>
          <h5 className="text-[#3b3f5c] text-xl font-semibold mb-2 text-ellipsis whitespace-nowrap dark:text-white-light">
            {mentoring.name}
          </h5>
          <p className="text-white-dark text-lg mb-4 h-16 overflow-hidden ">
            {mentoring.description}
          </p>
          <Link
            className="float-right mb-4 bg-adaptorsGray text-sm rounded-xl px-4 py-2 text-white hover:bg-adaptorsBlue font-extrabold"
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
