import MoreReviewButton from './MoreReviewButton';
import ScoreStar from './ScoreStar';

interface ReviewProps {
  reviewerId: string;
  title: string;
  comment: string;
  score: number;
}

export default function MentoringReview({
  reviews,
}: {
  reviews: ReviewProps[];
}) {
  return (
    <>
      <h1 className="text-2xl">BEST REVIEW</h1>
      <ul className={`w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
        {reviews.map((review) => (
          <li
            key={review.reviewerId}
            className="w-full border-[1px] rounded-lg p-6"
          >
            <span className="flex flex-row items-center gap-4">
              {/* 프로필 이미지 */}
              <h2>{review.reviewerId.slice(0, 2).toUpperCase()}</h2>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{review.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {review.reviewerId}
                </p>
              </div>
            </span>
            <div className="flex items-center my-2">
              <ScoreStar score={review.score} />
              <span className="ml-2 text-sm text-muted-foreground">
                ({review.score.toFixed(1)}/5)
              </span>
            </div>
            <p className=" text-lg">{review.comment}</p>
          </li>
        ))}

        <li className="md:col-span-2 lg:col-span-3">
          <MoreReviewButton />
        </li>
      </ul>
    </>
  );
}
