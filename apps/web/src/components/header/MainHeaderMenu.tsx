'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuType } from '../types/menu/menuType';

function MainHeaderMenu({ menuItem }: { menuItem: MenuType }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={menuItem.href}
        className={`text-center hover:underline underline-offset-4 ${menuItem.href === pathname ? 'text-black' : 'text-[#5C5C5C]'}`}
      >
        {menuItem.label}
      </Link>
    </li>
  );
}

export default MainHeaderMenu;
