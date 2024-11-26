import React from 'react';
import { PopluarCategoryItemType } from '../../../types/Category/PopularCategoryType';
import { Star } from 'lucide-react';
function PopularCategoryMentoring({ item }: { item: PopluarCategoryItemType }) {
  return (
    <li className="bg-white rounded-xl overflow-hidden max-w-[330px] mx-auto md:max-w-[370px] lg:max-w-[260px] xl:max-w-[260px] shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="aspect-video bg-gray-200 py-20" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-medium px-2 py-1 rounded-full">
          {item.duration}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2 py-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
              fill={i < Math.floor(item.rating) ? 'currentColor' : 'none'}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({item.reviews})</span>
        </div>
        <h3 className="font-medium mb-4 line-clamp-2">{item.title}</h3>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full py-4" />
          <span className="text-sm text-gray-600">{item.instructor}</span>
        </div>
      </div>
    </li>
  );
}

export default PopularCategoryMentoring;
