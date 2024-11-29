'use client';
import JoinFreeButton from '@components/ui/Button/JoinFreeButton';
import { MenuIcon } from 'lucide-react';
import { useSession } from 'src/app/context/SessionContext';
import UserProfile from './UserProfile';

function MainHeaderRightMenu({ openSideBar }: { openSideBar: () => void }) {
  const session = useSession();
  // console.log(session?.isAuth);
  return (
    <nav>
      <ul className="flex justify-end items-center gap-4">
        {session?.isAuth ? (
          <li>
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
