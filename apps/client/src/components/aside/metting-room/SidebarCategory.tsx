'use client';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useState } from 'react';
import { SidebarType } from '../../types/navigation/navigationTypes';
import { CategoryType } from '../../types/category/categoryType';

function SidebarCategory({ item }: { item: SidebarType }) {
  return (
    <Link href={item.href}>
      <li
        className={`w-full cursor-pointer grid grid-cols-6 gap-x-7 text-lg items-center border-l-8 border-transparent hover:border-adaptorsBlue py-4 px-2 ${item.isActive ? 'border-adaptorsBlue' : 'border-transparent'}`}
      >
        <span></span>
        {item.icon}
        <span
          className={`col-span-3 whitespace-nowrap ${item.isActive ? 'text-adaptorsBlue' : 'text-adaptorsGray'}`}
        >
          {item.label}
        </span>
      </li>
    </Link>
  );
}
export default SidebarCategory;
