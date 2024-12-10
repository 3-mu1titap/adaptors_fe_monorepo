'use client';

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
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
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
    <Sidebar className="absolute top-28 h-[35rem]">
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
                  className={`w-full cursor-pointer items-center border-l-4 border-transparent hover:border-slate-600 hover:bg-slate-50 py-4 pl-5  transition-all ${
                    item.isActive
                      ? 'border-adaptorsYellow'
                      : 'border-transparent'
                  }`}
                  key={item.label}
                >
                  <SidebarMenuButton asChild>
                    <Link className="flex items-center gap-4" href={item.href}>
                      <span
                        className={`whitespace-nowrap text-2xl ${
                          item.isActive
                            ? 'text-adaptorsYellow'
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
