import React from 'react';
import { RecommendType } from '../../../types/recommendType';
import ViewIcon from '../../../assets/icons/View';
function RecommendMentoringItem({ item }: { item: RecommendType }) {
  return (
    <div className="relative mb-2">
      <div className="aspect-[4/4] bg-gray-200 py-16 rounded-2xl overflow-hidden" />
      <div className="space-y-3">
        <div className="text-sm text-gray-600 mt-2 ml-2">{item.author}</div>
        <h3 className="font-medium group-hover:text-blue-600 transition-colors ml-2">
          {item.title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 gap-4 ml-2">
          <span>{item.date}</span>
          <div className="flex items-center gap-1">
            <ViewIcon />
            <span className="mx-60px">{item.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendMentoringItem;
