'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuType } from '../types/menu/menuType';

function MainHeaderMenu({ menuItem }: { menuItem: MenuType }) {
  const pathname = usePathname();

  return (
    <Link href={menuItem.href}>
      <li
        className={`grid sm:grid-cols-1 lg:grid-cols-6 gap-6 ${menuItem.href === pathname ? 'text-black' : 'text-[#5C5C5C]'}`}
      >
        <span className="col-span-5 md:text-2xl hover:underline underline-offset-4">
          {menuItem.label}
        </span>
      </li>
    </Link>
  );
}

export default MainHeaderMenu;
