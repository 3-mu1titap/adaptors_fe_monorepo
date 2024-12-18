'use client';
import { Sidebar, useSidebar } from '@repo/ui/components/ui/sidebar';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderRightMenu from './MainHeaderRightMenu';
import MypageHeaderGNB from './MypageHeaderGNB';
import MypageNav from './MypageNav';

export default function MyPageHeader({
  isAuth,
  profileImageUrl,
}: {
  isAuth: boolean;
  profileImageUrl: string;
}) {
  const { isMobile, open } = useSidebar(); // useSidebar에서 필요한 값을 구조분해 할당으로 가져옴

  return (
    <div
      className={`fixed sm:relative right-0 ${!isMobile ? 'ml-1' : ''} w-full md:black top-0 backdrop-blur-lg z-20 sm:pr-4`}
    >
      <header
        className={` bg-white w-full sm:bg-transparent container mx-auto flex flex-row justify-between items-center py-5 ${!isMobile ? 'pr-4 pl-14 ' : 'justify-between px-6'} `}
      >
        {!open && !isMobile && <MainHeaderLogo />}
        {!isMobile && <MypageHeaderGNB />}
        {!isMobile && (
          <MainHeaderRightMenu
            isAuth={isAuth}
            profileImageUrl={profileImageUrl}
          />
        )}
        {isMobile && <Sidebar />}
      </header>
      {
        <nav className="block md:block lg:hidden py-3 bg-white w-full">
          <MypageNav />
        </nav>
      }
    </div>
  );
}
