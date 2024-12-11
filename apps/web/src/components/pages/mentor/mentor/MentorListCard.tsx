import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import { MentorInfoType } from '@repo/web/components/types/profile/RequestType';
function MentorListCard({ item }: { item: MentorInfoType }) {
  return (
    <Link href={`/mentor/${item.mentorUuid}?role=${true}`}>
      <div className="bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 py-4 transition-all">
        <div className="p-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              className={`w-[110px] h-[76px] rounded-full py-4 ${
                item.profileImageUrl === 'none' ||
                item.profileImageUrl === 'www.naver.com' ||
                !item.profileImageUrl
                  ? 'bg-gray-200'
                  : ''
              }`}
              src={
                item.profileImageUrl === 'none' ||
                item.profileImageUrl === 'www.naver.com' ||
                !item.profileImageUrl
                  ? '' // 기본 이미지 경로
                  : item.profileImageUrl
              }
              width={44}
              height={44}
              alt=""
            />
            <span className="text-sm text-gray-600">{item.nickName}</span>
          </div>
        </div>
      </div>{' '}
    </Link>
  );
}

export default MentorListCard;
