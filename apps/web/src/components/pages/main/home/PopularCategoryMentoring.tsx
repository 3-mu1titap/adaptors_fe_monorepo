import React from 'react';
import { PopluarCategoryItemType } from '../../../types/Category/PopularCategoryType';
import RateViewer from '@components/common/RateViwer';
import Link from 'next/link';
function PopularCategoryMentoring({
  item,
  isRole,
}: {
  item: PopluarCategoryItemType;
  isRole: any;
}) {
  return (
    <Link href={`/mentor/${item.mentorUuId}?role=${isRole}`}>
      <div className="bg-white rounded-xl overflow-hidden mx-2 hover:shadow-md ring-1 hover:ring-4 ring-yellow-400 my-3 transition-all">
        <div className="relative">
          <div className="aspect-video bg-gray-200 py-20" />
          <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-medium px-2 py-1 rounded-full">
            {item.duration}
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <RateViewer
              rateData={item.rating}
              size="0.8rem"
              color={'#ffd84d'}
            />
            <span className="text-sm text-gray-500 ml-1">({item.reviews})</span>
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-4 line-clamp-2">{item.title}</h3>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full py-4" />
              <span className="text-sm text-gray-600">{item.instructor}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PopularCategoryMentoring;
