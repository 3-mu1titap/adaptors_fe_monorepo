'use client';
import { getIsLiked, postLikeReaction } from '@repo/web/actions/Like/like';
import RateViewer from '@repo/web/components/common/RateViwer';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
import FitImage from '@repo/web/components/ui/image/fit-image';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function BestMentorCard({
  item,
  isRole,
  index,
}: {
  item: BestMentorType;
  isRole: any;
  index: number;
}) {
  //좋아요 토글 이벤트
  const [like, setLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchIsLike = async () => {
      try {
        const res = await getIsLiked(item.mentorUuid);
        setLike(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIsLike();
  }, [item, like]);

  const handleLikeToggle = async () => {
    if (isLoading) return; // 로딩 중 중복 요청 방지

    setIsLoading(true);
    try {
      await postLikeReaction(item.mentorUuid); // API 호출
      setLike(true);
    } catch (error) {
      console.error('Failed to update like reaction:', error);
    } finally {
      setIsLoading(false); // 로딩 상태 종료
    }
  };
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

          <div className="absolute top-6 right-7 flex flex-col mt-2 mb-2 justify-end gap-y-1">
            <HeartIcon
              className={`w-[23px] h-[23px] cursor-pointer ${
                like ? 'fill-red-500' : 'text-gray-200'
              } ${isLoading && 'opacity-50 cursor-not-allowed'}`}
              onClick={(e) => {
                e.preventDefault(); // Link 기본 동작 방지
                handleLikeToggle();
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <FitImage
              className={`object-contain`}
              src={
                item.profileImageUrl === 'none'
                  ? 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734245082473-Frame-3.png'
                  : item.profileImageUrl
              }
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
              rateData={item?.reviewStarAvg}
              size="1.0rem"
              color={'#ffd84d'}
            />
            <span className="text-sm text-gray-500 text-center">
              ({item.totalReviewCount})
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
function async() {
  throw new Error('Function not implemented.');
}
