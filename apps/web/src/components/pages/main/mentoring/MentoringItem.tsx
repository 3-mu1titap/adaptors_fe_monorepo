import RateViewer from '@components/common/RateViwer';
import { SearchMentoringListType } from '@components/types/mentoring/mentoringTypes';
import Link from 'next/link';

export default function MentoringItem({
  item,
}: {
  item: SearchMentoringListType;
}) {
  return (
    <Link href={`/mentoring/${item.mentoringUuid}`} className="w-full">
      <div className="bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 transition-all">
        <div className="relative">
          <div className="aspect-video bg-gray-200 py-20" />
          <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-medium px-2 py-1 rounded-full">
            {/* {item.duration} 카테고리 들어갈곳*/}
            면접
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <RateViewer rateData={4.3} size="0.8rem" color={'#ffd84d'} />
            {/* <span className="text-sm text-gray-500 ml-1">({item.reviews})</span> */}
            <span className="text-sm text-gray-500 ml-1">120</span>
          </div>
          <div className="">
            <h3 className="font-medium mb-4 line-clamp-2">{item.name}</h3>
            <div className="flex items-center gap-2 border-t-[1px] border-dotted border-gray-300 pt-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full py-4" />
              {/* <span className="text-sm text-gray-600">{item.mentorName}</span> */}
              <span className="text-sm text-gray-600">이주연</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
