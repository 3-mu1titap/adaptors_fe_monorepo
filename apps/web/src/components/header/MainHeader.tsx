import Link from 'next/link';
import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
import ArrowRightIcon from '../assets/icons/ArrowRight';
import MainHeaderMenu from './MainHeaderMenu';

export default function MainHeader() {
  const menuItem = [
    { label: 'Home', href: '/home' },
    { label: 'About us', href: '/about' },
    { label: 'Services', href: '/service' },
    { label: 'Courses', href: '/course' },
    { label: 'FAQ', href: '/faq' },
  ];
  return (
    <header className="my-6 py-2 px-4 md:px-20">
      <div className="container mx-auto max-w-[79rem] grid grid-cols-1 gap-4 h-16 items-center px-6 md:px-14 md:grid-cols-3">
        {/* 로고 */}
        <Link
          href="/"
          className="flex justify-center md:justify-start items-center gap-2"
        >
          <AdaptorsLogoIcon className="w-[150px] md:w-[200px]" />
        </Link>

        <nav className="hidden sm:flex w-full justify-center">
          <ul className="text-base sm:text-sm md:text-lg ml-28 flex gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 px-4 sm:px-6 md:px-8">
            {menuItem.map((item) => (
              <MainHeaderMenu key={item.label} menuItem={item} />
            ))}
          </ul>
        </nav>

        {/* 버튼 */}
        <div className="flex justify-end">
          <button className="hidden md:hidden lg:block sm:max-w-[180px] md:max-w-[220px]  bg-[#FFD84D] text-white hover:bg-[#FFD84D]/90 px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base md:text-lg font-medium items-center gap-x-2">
            <span>Join for Free</span>
            <ArrowRightIcon color={true} />
          </button>
        </div>
      </div>
    </header>
  );
}
