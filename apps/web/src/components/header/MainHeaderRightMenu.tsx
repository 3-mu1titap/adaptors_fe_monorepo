import UserProfile from '@repo/ui/components/ui/custom/UserProfile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown';
import JoinFreeButton from '@repo/web/components/ui/Button/JoinFreeButton';
import { CreditCard, User } from 'lucide-react';

import HeaderLogoutButton from '@repo/web/components/ui/Button/HeaderLogoutButton';
import OpenAppButton from '@repo/web/components/ui/Button/OpenAppButton';
import Link from 'next/link';
import SideBarButton from './SideBarButton';

function MainHeaderRightMenu({ isAuth }: { isAuth: boolean }) {
  return (
    <nav>
      <ul className="flex justify-end items-center gap-4">
        {isAuth ? (
          <li>
            {/* <UserProfile size={40} /> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <UserProfile size={40} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {/* 마이페이지/프로필 */}
                  <DropdownMenuItem>
                    <Link
                      href="/mypage/edit"
                      className="flex items-center gap-2"
                    >
                      <User />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  {/* 마이페이지/볼트 */}
                  <DropdownMenuItem>
                    <Link
                      href="/mypage/volt"
                      className="flex items-center gap-2"
                    >
                      <CreditCard />
                      <span>Billing</span>
                    </Link>
                  </DropdownMenuItem>
                  {/* 일렉트론 이동 버튼 */}
                  <DropdownMenuItem>
                    <OpenAppButton />
                  </DropdownMenuItem>

                  {/* 로그아웃 */}
                  <HeaderLogoutButton />
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        ) : (
          <li>
            <JoinFreeButton />
          </li>
        )}
        <SideBarButton />
      </ul>
    </nav>
  );
}
export default MainHeaderRightMenu;
