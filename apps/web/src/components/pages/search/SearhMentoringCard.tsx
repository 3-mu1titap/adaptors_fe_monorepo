import { SearchMentoringListType } from '@repo/ui/types/CommonType.ts';
import FitImage from '../../ui/image/fit-image';
import Link from 'next/link';
function SearhMentoringCard({ item }: { item: SearchMentoringListType }) {
  return (
    <Link href={`/mentoring/${item.mentoringUuid}`}>
      <li className="rounded-xl h-auto border border-b-gray-200 flex flex-col">
        <div className="flex flex-col justify-center space-y-4">
          <div>
            {item.thumbnailUrl && (
              <FitImage
                alt=""
                src={`${item.thumbnailUrl}`}
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold self-center line-clamp-1">
              {item.name}
            </span>
            <span className="text-md text-black text-center mt-2 line-clamp-2">
              {item.description}
            </span>

            {item.isAvailable === true ? (
              <button className="rounded-xl h-12 bg-yellow-200 py-2 mt-10 hover:bg-black hover:text-white">
                멘토링 신청
              </button>
            ) : (
              <button className="rounded-xl h-12 bg-slate-900 py-2 mt-10 text-white">
                종료된 멘토링
              </button>
            )}
          </div>
        </div>
      </li>
    </Link>
  );
}

export default SearhMentoringCard;
