'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
import { SidebarType } from '../../types/navigation/navigationTypes';
import AdaptorsLogoIcon from '../../assets/icons/AdaptorsLogo';
import OverviewIcon from '../../assets/icons/Overview';
import CalendarIcon from '../../assets/icons/Calendar';
import VoltIcon from '../../assets/icons/Volt';
import MeetingIcon from '../../assets/icons/Meeting';
import MessagesIcon from '../../assets/icons/Messages';
import MyCourseIcon from '../../assets/icons/MyCourse';
import LogOutIcon from '../../assets/icons/LogOut';

function CommonSidebar() {
  const pathname = usePathname();
  const basePath = pathname.startsWith('/mentor') ? '/mentor' : '/mentee';

  const items: SidebarType[] = useMemo(() => {
    if (basePath === '/mentor') {
      return [
        {
          icon: (
            <OverviewIcon
              color={
                pathname === `/mentor` ||
                pathname.startsWith(`/mentor/mentoring`)
              }
            />
          ),
          label: 'Home',
          isActive:
            pathname === `/mentor` || pathname.startsWith(`/mentor/mentoring`),
          href: `/mentor`,
        },
        {
          icon: (
            <CalendarIcon color={pathname.startsWith(`/mentor/schedule`)} />
          ),
          label: 'Schedule',
          isActive: pathname.startsWith(`/mentor/schedule`),
          href: `/mentor/schedule`,
        },
        {
          icon: <VoltIcon color={pathname.startsWith(`/mentor/volt`)} />,
          label: 'Volt',
          isActive: pathname.startsWith(`/mentor/volt`),
          href: `/mentor/volt`,
        },
        {
          icon: <MeetingIcon color={pathname.startsWith(`/mentor/meeting`)} />,
          label: 'Meeting',
          isActive: pathname.startsWith(`/mentor/meeting`),
          href: `/mentor/meeting`,
        },
        {
          icon: <MessagesIcon color={pathname.startsWith(`/mentor/message`)} />,
          label: 'Message',
          isActive: pathname.startsWith(`/mentor/message`),
          href: `/mentor/message`,
        },
        {
          icon: <MyCourseIcon color={pathname.startsWith(`/mentor/mypage`)} />,
          label: 'My page',
          isActive: pathname.startsWith(`/mentor/mypage`),
          href: `/mentor/mypage`,
        },
        {
          icon: <LogOutIcon color={pathname.startsWith(`/mentor/logout`)} />,
          label: 'Log Out',
          isActive: pathname.startsWith(`/mentor/logout`),
          href: '#',
        },
      ];
    }
    return [];
  }, [pathname]);

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <AdaptorsLogoIcon className="w-[256px] mt-10 p-6 flex items-center gap-2" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className={`cursor-pointer items-center border-l-8 border-transparent hover:border-adaptorsBlue py-4 px-2 ${
                    item.isActive ? 'border-adaptorsBlue' : 'border-transparent'
                  }`}
                  key={item.label}
                >
                  <SidebarMenuButton asChild>
                    <Link className="flex items-center gap-4" href={item.href}>
                      <span className="flex-shrink-0 w-7 h-7">{item.icon}</span>
                      <span
                        className={`whitespace-nowrap text-xl ${
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
