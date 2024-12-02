import ValueUnit from '@components/ui/Text/ValueUnit';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';

export default function MentorReviewOverview({
  maxVisible = 4,
}: {
  maxVisible?: number;
}) {
  const ReviewData = {
    totalReviews: 5,
    reviewerImage: [
      'https://via.placeholder.com/150/0000FF/808080?text=Reviewer+1',
      'https://via.placeholder.com/150/FF0000/FFFFFF?text=Reviewer+2',
      'https://via.placeholder.com/150/FFFF00/000000?text=Reviewer+3',
      'https://via.placeholder.com/150/00FF00/000000?text=Reviewer+4',
      'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Reviewer+5',
    ],
  };
  //리뷰 정보 요청하는 api
  const visibleReviewers = maxVisible
    ? ReviewData.reviewerImage.slice(0, maxVisible)
    : ReviewData.reviewerImage;
  const remainingCount = maxVisible
    ? ReviewData.reviewerImage.length - maxVisible
    : ReviewData.reviewerImage.length;
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <div className="flex -space-x-4">
          {visibleReviewers.map((reviewer, index) => (
            <Avatar
              key={index}
              className="h-10 w-10 border-4 border-background"
            >
              <AvatarImage
                src={visibleReviewers[index]}
                alt={'reviewerImage'}
              />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          ))}
          {remainingCount > 0 && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-blue-50 text-blue-500 font-medium z-10">
              +{remainingCount}
            </div>
          )}
        </div>
      </div>
      <ValueUnit
        value={`${ReviewData.totalReviews.toLocaleString()}K`}
        unit="Reviews"
        valueSize="text-[1.15rem]"
        unitSize="text-sm"
      />
    </div>
  );
}
