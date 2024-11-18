'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { MenuType } from '../types/menu/menuType';
import Link from 'next/link';

function MainHeaderMenu({ menuItem }: { menuItem: MenuType }) {
  const pathname = usePathname();

  return (
    <Link href={menuItem.href}>
      <li
        className={`grid grid-cols-6 ${menuItem.href === pathname ? 'text-black' : 'text-[#5C5C5C]'}`}
      >
        <span className="col-span-3 hover:underline underline-offset-4">
          {menuItem.label}
        </span>
      </li>
    </Link>
  );
}

export default MainHeaderMenu;
