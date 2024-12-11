import RateViewer from '@repo/web/components/common/RateViwer';
import Link from 'next/link';
import { Mentoring } from '@repo/web/components/types/mentoring/mentoringTypes';
import Image from 'next/image';
function PopularCategoryMentoring({
  item,
  isRole,
}: {
  item: Mentoring;
  isRole: any;
}) {
  return (
    <Link href={`/mentor/${item.mentoringUuid}?role=${isRole}`}>
      <div className="bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 transition-all">
        <div className="relative">
          <div className="aspect-video bg-gray-200">
            <Image
              src={item.thumbnailUrl}
              alt="data"
              width={260}
              height={100}
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2 ml-3">
            <RateViewer rateData={4.5} size="0.8rem" color={'#ffd84d'} />
            <span className="text-sm text-gray-500 ml-1">({120})</span>
          </div>

          <div className="flex ml-4 items-center">
            <span className="text-md">총 수강량</span>
            <span className="ml-2 text-sm text-gray-500">{10}</span>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-xl mb-4 line-clamp-2">
              {item.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PopularCategoryMentoring;
