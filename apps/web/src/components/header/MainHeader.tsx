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
    <header className="my-6 py-2 px-auto w-full">
      <div className=" mx-auto flex h-16 items-center justify-between px-4 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <AdaptorsLogoIcon className="w-32 lg:w-40" />
        </Link>

        <nav className="hidden w-full px-auto md:flex md:justify-center md:gap-5">
          <ul className="text-lg w-full px-4 grid md:flex justify-center gap-7">
            {menuItem.map((item) => (
              <MainHeaderMenu menuItem={item} />
            ))}
          </ul>
        </nav>

        <button className="sm:w-[216px] w-32 bg-[#FFD84D] text-white hover:bg-[#FFD84D]/90 px-3 py-2 rounded-xl text-lg font-medium flex justify-center items-center gap-x-2">
          <span className="text-md">Joint for Free</span>
          <ArrowRightIcon color={true} />
        </button>
      </div>
    </header>
  );
}
