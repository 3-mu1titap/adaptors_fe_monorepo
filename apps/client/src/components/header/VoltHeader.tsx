'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function VoltHeader() {
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-sm">
      <div className="ml-6 flex space-x-8">
        <Link
          href="/mentor/volt"
          className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium ${pathname === '/mentor/volt' && 'border-adaptorsYellow'}`}
        >
          받은 볼트
        </Link>
        <Link
          href="/mentor/volt/exchange"
          className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium ${pathname === '/mentor/volt/exchange' && 'border-adaptorsYellow'}`}
        >
          환전 내역
        </Link>
      </div>
    </nav>
  );
}
