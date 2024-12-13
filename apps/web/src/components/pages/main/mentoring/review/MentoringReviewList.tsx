import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { Review } from '@repo/ui/types/ReviewType.js';
import ScoreStar from './ScoreStar';
interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
    nickname: string;
  };
  content: string;
  timestamp: string;
}

export default function MentoringReviewPagination({
  comments,
}: {
  comments: Review[];
}) {
  return (
    <div className="px-4 py-2 bg-adaptorsYellow/10">
      {comments?.map((comment) => (
        <div key={comment.id} className="flex gap-3 my-8 bg-[#FEFAEA]">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={comment.memberRequestDto.profileImageUrl}
              alt={comment.memberRequestDto.nickName}
            />
            <AvatarFallback>
              {comment.memberRequestDto.profileImageUrl}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium">
                {comment.memberRequestDto.nickName}
              </span>
              <span className="text-md text-muted-foreground">
                at {comment.reviewRequestDto.wroteAt}
              </span>
              <span className="text-md text-muted-foreground">
                at {comment.reviewRequestDto.wroteAt}
              </span>
              <ScoreStar score={comment.reviewRequestDto.score} />
            </div>
            <p className="text-lg mt-1">
              {comment.reviewRequestDto.reviewComment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
