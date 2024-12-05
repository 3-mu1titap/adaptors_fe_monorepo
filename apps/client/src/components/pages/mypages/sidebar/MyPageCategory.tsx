import React from 'react';
import { MyPageSidebarType } from '../../../types/navigation/navigationTypes';
import Link from 'next/link';

function MyPageCategory({ item }: { item: MyPageSidebarType }) {
  return (
    <Link href={item.href}>
      <div className="grid grid-cols-10">
        <span
          className={`col-span-7 text-2xl ${item.isActive ? 'text-adaptorsBlue' : 'text-gray-400'}`}
        >
          {item.label}
        </span>
      </div>
    </Link>
  );
}

export default MyPageCategory;
