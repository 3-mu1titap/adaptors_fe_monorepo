'use client';
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
import { SessionContext } from '@repo/web/app/context/SessionContext';
import HeaderLogoutButton from '@repo/web/components/ui/Button/HeaderLogoutButton';
import JoinFreeButton from '@repo/web/components/ui/Button/JoinFreeButton';
import OpenAppButton from '@repo/web/components/ui/Button/OpenAppButton';
import { CreditCard, User } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
function MainHeaderRightMenu({ isAuth }: { isAuth: boolean }) {
  const { profileImageUrl } = useContext(SessionContext);
  return (
    <nav>
      <ul className="flex justify-end items-center gap-4">
        {isAuth ? (
          <li>
            {/* <UserProfile size={40} /> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <UserProfile size={40} profileImgUrl={profileImageUrl} />
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
      </ul>
    </nav>
  );
}
export default MainHeaderRightMenu;
