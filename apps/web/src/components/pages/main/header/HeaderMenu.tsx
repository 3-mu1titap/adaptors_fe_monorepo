'use client';

import { MenuType } from '@components/types/menu/MenuType.ts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function HeaderMenu({ item }: { item: MenuType }) {
  const pathname = usePathname();
  return (
    <Link href={item.href}>
      <li
        className={`col-span-3 text-2xl text-black text-bold ${pathname === item.href ? 'text-black' : 'text-gray-400'}`}
      >
        <span>{item.label}</span>
      </li>
    </Link>
  );
}

export default HeaderMenu;
