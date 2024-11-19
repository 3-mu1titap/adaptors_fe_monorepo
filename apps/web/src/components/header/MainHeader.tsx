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
    <header className="my-6 py-2 px-20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-40">
        <Link href="/" className="flex items-center gap-2">
          <AdaptorsLogoIcon className="w-[200px]" />
        </Link>

        <nav className="hidden md:flex">
          <ul className="text-lg grid md:flex">
            {menuItem.map((item) => (
              <MainHeaderMenu menuItem={item} />
            ))}
          </ul>
        </nav>

        <button className="min-w-[120px] bg-[#FFD84D] text-white hover:bg-[#FFD84D]/90 px-4 py-2 rounded-xl text-lg font-medium flex items-center gap-x-2">
          <span>Joint for Free</span>
          <ArrowRightIcon color={true} />
        </button>
      </div>
    </header>
  );
}
