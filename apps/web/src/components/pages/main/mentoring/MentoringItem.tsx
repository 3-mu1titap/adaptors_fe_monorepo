import CustomSessionInfoTags, {
  SessionInfo,
} from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import { Skeleton } from '@repo/ui/components/ui/skeleton';
import { Mentoring } from '@repo/ui/types/MentoringListType.ts';
import RateViewer from '@repo/web/components/common/RateViwer';
import FitImage from '@repo/web/components/ui/image/fit-image';
import { File, User } from 'lucide-react';
import Link from 'next/link';

export default function MentoringItem({
  item,
  isLoading,
}: {
  item: Mentoring;
  isLoading: boolean;
}) {
  const SessionInfo: SessionInfo[] = [
    {
      id: 1,
      infoName: 'Session',
      infoValue: item?.nowSessionCount || 0,
      icon: <File size={12} className="text-blue-500" />,
    },
    {
      id: 2,
      infoName: 'Students',
      infoValue: item?.totalSaleCount || 0,
      icon: <User size={12} className="text-blue-500" />,
    },
  ];

  return (
    <Link href={`/mentoring/${item?.mentoringUuid || '#'}`} className="w-full">
      <div className="bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 transition-all">
        <div className="relative">
          {!item ? (
            <Skeleton className="w-full h-48 bg-gray-200" />
          ) : (
            <FitImage
              src={item?.thumbnailUrl || ''}
              alt={item?.name || 'Placeholder'}
            />
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {isLoading ? (
              <>
                <Skeleton className="w-20 h-4 bg-gray-200" />
                <Skeleton className="w-12 h-4 bg-gray-200 ml-1" />
              </>
            ) : (
              <>
                <RateViewer
                  rateData={item?.averageStar || 0}
                  size="0.8rem"
                  color={'#ffd84d'}
                />
                <span className="text-sm text-gray-500 ml-1">
                  ({item?.reviewCount || 0})
                </span>
              </>
            )}
          </div>
          <div className="">
            {isLoading ? (
              <Skeleton className="w-full h-6 bg-gray-200 mb-4" />
            ) : (
              <h3 className="font-medium mb-4 line-clamp-2 h-12">
                {item?.name}
              </h3>
            )}
            <div className="flex items-center gap-2 border-t-[1px] border-dotted border-gray-300 pt-2">
              {isLoading ? (
                <>
                  <Skeleton className="w-20 h-6 bg-gray-200" />
                  <Skeleton className="w-20 h-6 bg-gray-200" />
                </>
              ) : (
                <CustomSessionInfoTags SessionInfoProps={SessionInfo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
