import Link from 'next/link';
import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
import ArrowRightIcon from '../assets/icons/ArrowRight';
import MainHeaderMenu from './MainHeaderMenu';

export default function MainHeader() {
  const menuItem = [
    { label: 'Home', href: '/home' },
    {
      label: 'Mypage',
      href: '/mypage',
    },
    { label: 'Services', href: '/service' },
    { label: 'Courses', href: '/course' },
    { label: 'FAQ', href: '/faq' },
  ];
  return (
    <header className="my-6 py-2 px-4 md:px-20">
      <div className="container mx-auto max-w-[77rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-16 items-center px-6 md:px-14">
        {/* 로고 */}
        <Link
          href="/"
          className="flex justify-center lg:justify-start items-center gap-2"
        >
          <AdaptorsLogoIcon className="w-[120px] md:w-[150px] lg:w-[200px]" />
        </Link>

        {/* 네비게이션 */}
        <nav className="hidden lg:flex w-full justify-center ml-12">
          <ul className="text-base lg:text-lg flex gap-x-4 lg:gap-x-8">
            {menuItem.map((item) => (
              <MainHeaderMenu key={item.label} menuItem={item} />
            ))}
          </ul>
        </nav>

        {/* 버튼 */}
        <div className="flex justify-end">
          <button className="hidden md:flex bg-[#FFD84D] text-white hover:bg-[#FFD84D]/90 px-4 py-2 rounded-xl text-sm lg:text-base font-medium items-center gap-x-2">
            <span>Join for Free</span>
            <ArrowRightIcon color={true} />
          </button>
        </div>
      </div>
    </header>
  );
}
