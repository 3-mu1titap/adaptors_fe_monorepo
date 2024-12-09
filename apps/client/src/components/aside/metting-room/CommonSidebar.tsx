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
import {
  Calendar,
  Handshake,
  LayoutDashboard,
  MessageSquareHeartIcon,
  Power,
  Presentation,
  UserPenIcon,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import AdaptorsLogoIcon from '../../assets/icons/AdaptorsLogo';
import { SidebarType } from '../../types/navigation/navigationTypes';

function CommonSidebar() {
  const pathname = usePathname();
  const basePath = pathname.startsWith('/mentor') ? '/mentor' : '/mentee';

  const items: SidebarType[] = useMemo(() => {
    if (basePath === '/mentor') {
      return [
        {
          icon: (
            <LayoutDashboard
              color={pathname === `/mentor` ? '#F6D84C' : '#ACACAC'}
              size={20}
            />
          ),
          label: 'Home',
          isActive: pathname === `/mentor`,
          href: `/mentor`,
        },
        {
          icon: (
            <Handshake
              color={
                pathname === `/mentoring` ||
                pathname.startsWith(`/mentor/mentoring`)
                  ? '#F6D84C'
                  : '#ACACAC'
              }
              size={20}
            />
          ),
          label: 'Mentoring',
          isActive: pathname.startsWith(`/mentor/mentoring`),
          href: `/mentor/mentoring`,
        },
        {
          icon: (
            <Calendar
              color={
                pathname.startsWith(`/mentor/schedule`) ? '#F6D84C' : '#ACACAC'
              }
              size={20}
            />
          ),
          label: 'Schedule',
          isActive: pathname.startsWith(`/mentor/schedule`),
          href: `/mentor/schedule`,
        },
        {
          icon: (
            <Zap
              color={
                pathname.startsWith(`/mentor/volt`) ? '#F6D84C' : '#ACACAC'
              }
              size={20}
            />
          ),
          label: 'Volt',
          isActive: pathname.startsWith(`/mentor/volt`),
          href: `/mentor/volt`,
        },
        {
          icon: (
            <Presentation
              color={
                pathname.startsWith(`/mentor/meeting`) ? '#F6D84C' : '#ACACAC'
              }
              size={20}
            />
          ),
          label: 'Meeting',
          isActive: pathname.startsWith(`/mentor/meeting`),
          href: `/mentor/meeting`,
        },
        {
          icon: (
            <MessageSquareHeartIcon
              color={
                pathname.startsWith(`/mentor/message`) ? '#F6D84C' : '#ACACAC'
              }
              size={20}
            />
          ),
          label: 'Message',
          isActive: pathname.startsWith(`/mentor/message`),
          href: `/mentor/message`,
        },
        {
          icon: (
            <UserPenIcon
              color={
                pathname.startsWith(`/mentor/mycourse`) ? '#F6D84C' : '#ACACAC'
              }
              size={20}
            />
          ),
          label: 'My page',
          isActive: pathname.startsWith(`/mentor/mypage`),
          href: `/mentor/mypage`,
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
