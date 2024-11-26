import { EmptyStar } from '@components/assets/icons/EmptyStar';
import { FullStar } from '@components/assets/icons/FullStar';

export default function ScoreStar({ score }: { score: number }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(score)) {
        // Full star
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <FullStar />
          </div>
        );
      } else if (i === Math.ceil(score)) {
        // Partial star
        const percentage = Math.round((score - Math.floor(score)) * 100);
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <EmptyStar />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${percentage}%` }}
            >
              <FullStar />
            </div>
          </div>
        );
      } else {
        // Empty star
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <EmptyStar />
          </div>
        );
      }
    }
    return stars;
  };

  return <div className="flex gap-1">{renderStars()}</div>;
}
