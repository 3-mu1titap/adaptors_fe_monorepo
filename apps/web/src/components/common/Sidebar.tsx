'use client';
import {
  Home,
  MenuIcon,
  NotebookPen,
  UserPen,
  UserSearch,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
import img3 from '../assets/images/volpang3.png';

export function Sidebar() {
  const MenuData = [
    { label: 'Home', href: '/home', icon: <Home /> },
    {
      label: 'Mentoring',
      href: '/mentoring',
      icon: <NotebookPen />,
    },
    { label: 'Mentor', href: '/mentor', icon: <UserSearch /> },
    { label: 'MyPage', href: '/mypage/edit', icon: <UserPen /> },
  ];

  const [open, setOpen] = useState(false); // 기본값 false로 변경
  const data = MenuData;
  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = ''; // 스크롤 활성화
    }
  }, [open]);

  const handleRoute = (link: string) => {
    router.push(link);
    setOpen(false);
  };

  const handleNavButton = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      {/* Sidebar Open 상태 */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[1000] h-svh bg-black bg-opacity-50"
            onClick={handleNavButton}
            aria-hidden="true"
          />
          <aside
            className={`fixed inset-y-0 left-0 z-[1001] w-full h-svh transform overflow-hidden p-4 transition-transform duration-300 ease-in-out ${
              open ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{
              animation: 'gradient-bg 3s infinite',
              background: 'linear-gradient(35deg, #F8D448, #F6D84C, #D4B007)',
              backgroundSize: '200% 100%',
            }}
          >
            <div className="flex items-center justify-between mb-4 p-4">
              {/* <h2 className="text-2xl font-bold text-white">Menus</h2> */}
              <AdaptorsLogoIcon className="w-[50%]" />
              <div onClick={handleNavButton} className="z-[100]">
                <X color="Black" size={'1.5rem'} />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 z-50 w-full ">
              {data.map((menu) => (
                <div
                  key={menu.label}
                  onClick={() => handleRoute(menu.href)}
                  className="flex gap-3 items-center"
                >
                  <div className="rounded-full bg-adaptorsYellow/40 p-2">
                    {menu.icon}
                  </div>

                  <p className="text-lg font-bold">{menu.label}</p>
                </div>
              ))}
            </div>
            {/* <Image src={img1.src} alt="adators" width={100} height={100} />
            <Image
              src={img2.src}
              alt="adators"
              width={130}
              height={130}
              className="transform -rotate-90 absolute right-[-30px] top-24"
            /> */}
            <Image
              src={img3.src}
              alt="adators"
              width={80}
              height={80}
              className="transform scale-x-[-1] absolute bottom-0"
            />
          </aside>
        </>
      )}

      {/* Sidebar Closed 상태 */}
      {!open && (
        <div onClick={handleNavButton}>
          <MenuIcon size={28} />
        </div>
      )}
    </div>
  );
}
