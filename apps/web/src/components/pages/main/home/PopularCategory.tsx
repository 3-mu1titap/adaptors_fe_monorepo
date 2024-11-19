'use client';
import React from 'react';
import { PopularCategoryType } from '../../../types/Category/PopularCategoryType';

function PopularCategory({ item }: { item: PopularCategoryType }) {
  return (
    <div className={`flex py-6 justify-center gap-4`}>
      <span className="text-2xl w-[30px] h-[30px]">{item.icon}</span>
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">{item.courses}</p>
      </div>
    </div>
  );
}

export default PopularCategory;
