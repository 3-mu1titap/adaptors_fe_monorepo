'use client';

import Link from 'next/link';
import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
import ArrowRightIcon from '../assets/icons/ArrowRight';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const pathname = usePathname();
  return (
    <header className="my-2 py-2 px-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <AdaptorsLogoIcon className="w-[200px]" />
        </Link>
        <nav className="hidden md:flex gap-6 text-lg font-bold">
          <Link
            href="/home"
            className={`hover:underline underline-offset-4 ${pathname === '/home' ? 'text-black' : 'text-[#5C5C5C]'}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:underline underline-offset-4 ${pathname === '/about' ? 'text-black' : 'text-[#5C5C5C]'}`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`hover:underline underline-offset-4 ${pathname === '/services' ? 'text-black' : 'text-[#5C5C5C]'}`}
          >
            Services
          </Link>
          <Link
            href="/courses"
            className={`hover:underline underline-offset-4 ${pathname === '/courses' ? 'text-black' : 'text-[#5C5C5C]'}`}
          >
            Courses
          </Link>
          <Link
            href="/faq"
            className={`hover:underline underline-offset-4 ${pathname === '/faq' ? 'text-black' : 'text-[#5C5C5C]'}`}
          >
            FAQ
          </Link>
        </nav>
        <button className="min-w-[120px] bg-[#FFD84D] text-white hover:bg-[#FFD84D]/90 px-4 py-2 rounded-xl text-lg font-medium flex items-center gap-x-2">
          <span>Joint for Free</span>
          <ArrowRightIcon color={true} />
        </button>
      </div>
    </header>
  );
}
