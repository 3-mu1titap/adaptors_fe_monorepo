'use client';

import { CustomToolTip } from '@repo/ui/components/ui/custom/index';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@repo/ui/components/ui/sidebar';
import { SidebarType } from '@repo/web/components/types/navigation/navigationTypes';
import {
  Banknote,
  FileClock,
  FileHeart,
  History,
  Power,
  UserRoundPen,
  UserX,
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
function CommonSidebar() {
  const pathname = usePathname();
  const basePath = pathname.startsWith('/mypage') ? '/mypage' : '/home';

  const items: SidebarType[] = useMemo(() => {
    if (basePath === '/mypage') {
      return [
        {
          icon: (
            <UserRoundPen
              color={pathname === `/mypage/edit` ? '#F6D84C' : '#ACACAC'}
              size={20}
            />
          ),
          label: 'Profile',
          isActive:
            pathname === `/mypage` || pathname.startsWith(`/mypage/edit`),
          href: `/mypage/edit`,
        },
        {
          icon: (
            <History
              color={pathname === `/mypage/mycourse` ? '#F6D84C' : '#ACACAC'}
              size={20}
            />
          ),
          label: 'History',
          isActive: pathname.startsWith(`/mypage/mycourse`),
          href: `/mypage/mycourse`,
        },
        {
          icon: (
            <FileClock
              color={pathname === `/mypage/feedback` ? '#F6D84C' : '#ACACAC'}
              size={20}
            />
          ),
          label: 'Report',
          isActive: pathname.startsWith(`/mypage/feedback`),
          href: `/mypage/feedback`,
        },
        {
          icon: (
            <FileHeart
              color={pathname === `/mypage/like` ? '#F6D84C' : '#ACACAC'}
              size={20}
            />
          ),
          label: 'Likes',
          isActive: pathname.startsWith(`/mypage/like`),
          href: `/mypage/like`,
        },
        {
          icon: (
            <Banknote
              color={pathname === `/mypage/volt` ? '#F6D84C' : '#ACACAC'}
              size={20}
            />
          ),
          label: 'Volt',
          isActive: pathname.startsWith(`/mypage/volt`),
          href: `/mypage/volt`,
        },
        {
          icon: (
            <Power
              color={
                pathname.startsWith(`/mentor/logout`) ? '#F6D84C' : '#ACACAC'
              }
              size={20}
            />
          ),
          label: 'Log Out',
          isActive: pathname.startsWith(`/mentor/logout`),
          href: '#',
          onClick: () => signOut(),
        },
      ];
    }
    return [];
  }, [pathname]);

  return (
    <Sidebar className="bg-white">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <CustomToolTip text="Adaptors Logo">
              <AdaptorsLogoIcon className="w-[180px] mt-0 px-6 py-4 flex items-center gap-2" />
            </CustomToolTip>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <CustomToolTip key={index} text={item.label}>
                  <SidebarMenuItem
                    className={`w-full cursor-pointer items-center border-l-4 border-transparent hover:border-slate-600 hover:bg-slate-50 py-4 pl-5  transition-all ${
                      item.isActive
                        ? 'border-adaptorsYellow'
                        : 'border-transparent'
                    }`}
                    key={item.label}
                  >
                    <SidebarMenuButton asChild>
                      {item.label === 'Log Out' ? (
                        <span
                          className="flex items-center justify-start gap-4"
                          onClick={item.onClick}
                        >
                          <span className="flex-shrink-0 w-5 h-5 overflow-hidden object-cover">
                            {item.icon}
                          </span>
                          <span
                            className={`whitespace-nowrap text-md ${
                              item.isActive
                                ? 'text-adaptorsYellow'
                                : 'text-adaptorsGray'
                            }`}
                          >
                            {item.label}
                          </span>
                        </span>
                      ) : (
                        <Link
                          className="flex items-center justify-start gap-4"
                          href={item.href}
                        >
                          <span className="flex-shrink-0 w-5 h-5 overflow-hidden object-cover">
                            {item.icon}
                          </span>
                          <span
                            className={`whitespace-nowrap text-md ${
                              item.isActive
                                ? 'text-adaptorsYellow'
                                : 'text-adaptorsGray'
                            }`}
                          >
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CustomToolTip>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default CommonSidebar;
