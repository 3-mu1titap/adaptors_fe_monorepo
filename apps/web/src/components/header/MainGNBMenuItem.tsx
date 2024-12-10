'use client';
import { MenuType } from '@repo/web/components/types/menu/MenuType.ts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MainHeaderGNBMenuItem({ menuItem }: { menuItem: MenuType }) {
  const pathname = usePathname();
  return (
    <Link href={menuItem.href}>
      <li
        className={`text-md lg:text-lg hover:underline underline-offset-4 ${menuItem.href === pathname ? 'text-black font-bold underline' : 'text-[#5C5C5C90]'}`}
      >
        {menuItem.label}
      </li>
    </Link>
  );
}
export default MainHeaderGNBMenuItem;
