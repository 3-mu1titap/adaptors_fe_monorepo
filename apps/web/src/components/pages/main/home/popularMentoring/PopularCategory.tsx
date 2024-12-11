'use client';
import { PopularCategoryType } from '@repo/web/components/types/Category/PopularCategoryType';
import React from 'react';
function PopularCategory({ item }: { item: PopularCategoryType }) {
  return (
    <div className={`flex py-3 justify-center bg-slate-100 rounded-lg mx-2`}>
      <span className="text-2xl w-[30px] h-[30px]">{item.icon}</span>
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">{item.courses}</p>
      </div>
    </div>
  );
}

export default PopularCategory;
