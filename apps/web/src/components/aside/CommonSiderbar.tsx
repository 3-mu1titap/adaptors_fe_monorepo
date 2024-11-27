'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@repo/ui/components/ui/sidebar';
import AdaptorsLogoIcon from '@components/assets/icons/AdaptorsLogo';
import { SidebarType } from '@components/types/navigation/navigationTypes';
function CommonSidebar() {
  const pathname = usePathname();
  const basePath = pathname.startsWith('/mypage') ? '/mypage' : '/home';

  const items: SidebarType[] = useMemo(() => {
    if (basePath === '/mypage') {
      return [
        {
          label: '개인정보수정',
          isActive:
            pathname === `/mypage` || pathname.startsWith(`/mypage/edit`),
          href: `/mypage/edit`,
        },
        {
          label: '나의 수강정보',
          isActive: pathname.startsWith(`/mypage/mymentoring`),
          href: `/mypage/mycourse`,
        },
        {
          label: '평가보기',
          isActive: pathname.startsWith(`/mypage/feedback`),
          href: `/mypage/feedback`,
        },
        {
          label: '블랙리스트 보기',
          isActive: pathname.startsWith(`/mypage/blacklist`),
          href: `/mypage/blacklist`,
        },
        {
          label: '관심목록 보기',
          isActive: pathname.startsWith(`/mypage/like`),
          href: `/mypage/like`,
        },
        {
          label: '볼트',
          isActive: pathname.startsWith(`/mypage/volt`),
          href: `/mypage/volt`,
        },
        {
          label: 'Log Out',
          isActive: pathname.startsWith(`/mypage/logout`),
          href: '#',
        },
      ];
    }
    return [];
  }, [pathname]);

  return (
    <Sidebar className="absolute top-56 h-[35rem]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem></SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className={`cursor-pointer items-center hover:border-adaptorsBlue py-4 px-2 ${
                    item.isActive ? 'border-adaptorsBlue' : 'border-transparent'
                  }`}
                  key={item.label}
                >
                  <SidebarMenuButton asChild>
                    <Link className="flex items-center gap-4" href={item.href}>
                      <span
                        className={`whitespace-nowrap text-2xl ${
                          item.isActive
                            ? 'text-adaptorsBlue'
                            : 'text-adaptorsGray'
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default CommonSidebar;
