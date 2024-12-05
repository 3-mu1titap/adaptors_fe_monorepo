import React from 'react';
import { SubCategoryType } from '../../../types/navigation/navigationTypes';
import Link from 'next/link';

function MyPageDetailCategory({ item }: { item: SubCategoryType }) {
  return (
    <Link href={item.href}>
      <li className="grid grid-rows-10">
        <span
          className={`row-span-7 text-2xl ${item.isActive ? 'text-adaptorsBlue' : 'text-gray-400'}`}
        >
          {item.label}
        </span>
      </li>
    </Link>
  );
}

export default MyPageDetailCategory;
