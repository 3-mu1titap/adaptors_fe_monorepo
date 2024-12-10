import CustomSessionInfoTags, {
  SessionInfo,
} from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import { Mentoring } from '@repo/ui/types/MentoringListType.ts';
import RateViewer from '@repo/web/components/common/RateViwer';
import FitImage from '@repo/web/components/ui/image/fit-image';
import { File, User } from 'lucide-react';
import Link from 'next/link';

export default function MentoringItem({ item }: { item: Mentoring }) {
  const SessionInfo: SessionInfo[] = [
    {
      id: 1,
      infoName: 'Session',
      infoValue: item.nowSessionCount ? item.nowSessionCount : 0,
      icon: <File size={12} className="text-blue-500" />,
    },
    {
      id: 2,
      infoName: 'Students',
      infoValue: item.totalSaleCount ? item.totalSaleCount : 0,
      icon: <User size={12} className="text-blue-500" />,
    },
  ];
  return (
    <Link href={`/mentoring/${item.mentoringUuid}`} className="w-full">
      <div className="bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 transition-all">
        <div className="relative">
          <FitImage src={item.thumbnailUrl} alt={item.name} />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <RateViewer
              rateData={item.averageStar ? item.averageStar : 0}
              size="0.8rem"
              color={'#ffd84d'}
            />
            <span className="text-sm text-gray-500 ml-1">
              ({item.reviewCount ? item.reviewCount : 0})
            </span>
          </div>
          <div className="">
            <h3 className="font-medium mb-4 line-clamp-2 h-12">{item.name}</h3>
            <div className="flex items-center gap-2 border-t-[1px] border-dotted border-gray-300 pt-2">
              <CustomSessionInfoTags SessionInfoProps={SessionInfo} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
