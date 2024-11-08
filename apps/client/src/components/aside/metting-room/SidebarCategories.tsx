'use client';

import { usePathname } from 'next/navigation';
import CalendarIcon from '../../assets/icons/Calendar';
import LogOutIcon from '../../assets/icons/LogOut';
import MeetingIcon from '../../assets/icons/Meeting';
import MessagesIcon from '../../assets/icons/Messages';
import MyCourseIcon from '../../assets/icons/MyCourse';
import OverviewIcon from '../../assets/icons/Overview';
import VoltIcon from '../../assets/icons/Volt';
import MeetingRoomNavCategory from './SidebarCategory';
import { useMemo } from 'react';
import { SidebarType } from '../../types/navigation/navigationTypes';

function SidebarCategories() {
  const pathname = usePathname();
  const basePath = pathname.startsWith('/mentor') ? '/mentor' : '/mentee';
  const routes: SidebarType[] = useMemo(() => {
    return [
      {
        icon: (
          <OverviewIcon
            color={
              pathname === `${basePath}` ||
              (pathname.startsWith(`${basePath}/mentoring`) && true)
            }
          />
        ),
        label: 'Home',
        isActive:
          pathname === `${basePath}` ||
          pathname.startsWith(`${basePath}/mentoring`),
        href: `${basePath}`,
      },
      {
        icon: (
          <CalendarIcon
            color={pathname.startsWith(`${basePath}/schedule`) && true}
          />
        ),
        label: 'Schedule',
        isActive: pathname.startsWith(`${basePath}/schedule`),
        href: `${basePath}/schedule`,
      },
      {
        icon: <VoltIcon color={pathname.startsWith(`${basePath}/volt`)} />,
        label: 'Volt',
        isActive: pathname.startsWith(`${basePath}/volt`),
        href: `${basePath}/volt`,
      },
      {
        icon: (
          <MeetingIcon color={pathname.startsWith(`${basePath}/meeting`)} />
        ),
        label: 'Meeting',
        isActive: pathname.startsWith(`${basePath}/meeting`),
        href: `${basePath}/meeting`,
      },
      {
        icon: (
          <MessagesIcon color={pathname.startsWith(`${basePath}/message`)} />
        ),
        label: 'Message',
        isActive: pathname.startsWith(`${basePath}/message`),
        href: `${basePath}/message`,
      },
      {
        icon: (
          <MyCourseIcon color={pathname.startsWith(`${basePath}/mypage`)} />
        ),
        label: 'My page',
        isActive: pathname.startsWith(`${basePath}/mypage`),
        href: `${basePath}/mypage`,
      },
      {
        icon: <LogOutIcon color={pathname.startsWith(`${basePath}/logout`)} />,
        label: 'Log Out',
        isActive: pathname.startsWith(`${basePath}/logout`),
        href: '#',
      },
    ];
  }, [pathname]);

  return (
    <nav className="w-full flex flex-col justify-center items-center ">
      <ul className="w-full flex flex-col justify-center items-center text-lg">
        {routes.map((item: SidebarType, index: number) => (
          <MeetingRoomNavCategory key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default SidebarCategories;
