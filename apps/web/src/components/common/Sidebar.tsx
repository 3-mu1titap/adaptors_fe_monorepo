'use client';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { headerGNBMenuData } from 'src/store/initialStore';

export function Sidebar() {
  const [open, setOpen] = useState(false); // 기본값 false로 변경
  const data = headerGNBMenuData;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = ''; // 스크롤 활성화
    }
  }, [open]);

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
              <h2 className="text-2xl font-bold text-white">Menus</h2>
              <div onClick={handleNavButton} className="z-[100]">
                <X color="white" size={'1.5rem'} />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 z-50">
              {data.map((menu) => (
                <Link key={menu.label} href={menu.href}>
                  <p className="text-sm font-bold">{menu.label}</p>
                </Link>
              ))}
            </div>
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
