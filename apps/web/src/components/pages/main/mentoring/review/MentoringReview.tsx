import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { Review } from '@repo/ui/types/ReviewType.js';
import RateViewer from '@repo/web/components/common/RateViwer';

export default function MentoringReview({ comments }: { comments: Review[] }) {
  return (
    <div className="px-4 py-2 bg-adaptorsYellow/10">
      {comments?.map((comment) => (
        <div key={comment.id} className=" my-8 px-2 bg-[#FEFAEA]">
          <div className="flex flex-wrap justify-between gap-2 w-full">
            {/* 프로필 이름 별점 */}
            <div className="flex gap-2 items-end justify-between w-full">
              {/* 프로필 이름 */}
              <div className="flex gap-2 w-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={comment.memberRequestDto.profileImageUrl}
                    alt={comment.memberRequestDto.nickName}
                  />
                  <AvatarFallback>
                    {comment.memberRequestDto.profileImageUrl}
                  </AvatarFallback>
                </Avatar>
                <span className="text-lg font-medium leading-4 flex items-end pb-1.5">
                  {comment.memberRequestDto.nickName}
                </span>
              </div>
              <RateViewer
                rateData={comment.reviewRequestDto.score || 0}
                size="0.8rem"
                color={'#ffd84d'}
              />
            </div>
          </div>
          <p className="text-lg mt-4 pl-2 w-full relative">
            {comment.reviewRequestDto.reviewComment}
            <br />
            <span className="text-md text-muted-foreground absolute right-3 mt-2">
              at {comment.reviewRequestDto.wroteAt.split('T')[0]}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
