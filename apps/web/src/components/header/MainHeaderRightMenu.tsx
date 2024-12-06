'use client';
import JoinFreeButton from '@components/ui/Button/JoinFreeButton';
import UserProfile from '@repo/ui/components/ui/custom/UserProfile';
import { MenuIcon } from 'lucide-react';
import { useSession } from 'src/app/context/SessionContext';

function MainHeaderRightMenu({ openSideBar }: { openSideBar: () => void }) {
  const session = useSession();
  // console.log(session?.isAuth);
  const handleOpenApp = async () => {
    const token = 'jasonahn'; // 로그인 토큰

    const response = await fetch('/api/openElectronApp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log(result.message); // Electron 앱이 성공적으로 실행됨
    } else {
      console.error(result.error); // 오류 처리
    }
  };

  return (
    <nav>
      <ul className="flex justify-end items-center gap-4">
        {session?.isAuth ? (
          <li onClick={() => handleOpenApp()}>
            <UserProfile size={40} />
          </li>
        ) : (
          <li>
            <JoinFreeButton />
          </li>
        )}
        <li className="block lg:hidden" onClick={openSideBar}>
          <MenuIcon size={24} />
        </li>
      </ul>
    </nav>
  );
}
export default MainHeaderRightMenu;
