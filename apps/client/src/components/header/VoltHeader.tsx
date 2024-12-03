'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function VoltHeader() {
  const pathname = usePathname();
  return (
    <nav className="p-2 bg-white mx-auto shadow-sm">
      <ul className="ml-6 flex space-x-8 text-2xl">
        <li>
          <Link
            href="/mentor/volt"
            className={`inline-flex items-center px-1 pt-1 border-b-2 ${pathname === '/mentor/volt' && 'border-adaptorsYellow font-bold'}`}
          >
            받은 볼트
          </Link>
        </li>
        <li>
          <Link
            href="/mentor/volt/exchange"
            className={`inline-flex items-center px-1 pt-1 border-b-2 ${pathname === '/mentor/volt/exchange' && 'border-adaptorsYellow font-bold'}`}
          >
            환전 내역
          </Link>
        </li>
      </ul>
    </nav>
  );
}
