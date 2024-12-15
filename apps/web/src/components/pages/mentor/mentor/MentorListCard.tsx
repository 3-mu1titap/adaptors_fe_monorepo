import RateViewer from '@repo/web/components/common/RateViwer';
import { MentorInfoType } from '@repo/web/components/types/profile/RequestType';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function MentorListCard({ item }: { item: MentorInfoType }) {
  return (
    <Link href={`/mentor/${item.mentorUuid}?role=${true}`}>
      <div className="rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 py-4 transition-all">
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <RateViewer rateData={3.8} size="0.8rem" color={'#ffd84d'} />
            <span className="text-sm text-gray-500 ml-1">({20})</span>

            <HeartIcon className="w-[12px] h-[12px] ml-3" />
            <span className="text-sm text-gray-500 ml-1">({100})</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              className={`w-[55px] rounded-full py-4`}
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
            <span className="ml-1 text-md text-gray-600">{item.nickName}</span>
          </div>
        </div>
      </div>{' '}
    </Link>
  );
}

export default MentorListCard;
