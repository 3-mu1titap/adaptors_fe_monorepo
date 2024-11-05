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
        icon: <OverviewIcon color={pathname === `${basePath}`} />,
        label: 'Home',
        isActive: pathname === `${basePath}`,
        href: `${basePath}`,
      },
      {
        icon: <CalendarIcon color={pathname === `${basePath}/calendar`} />,
        label: 'Calendar',
        isActive: pathname === `${basePath}/calendar`,
        href: `${basePath}/calendar`,
      },
      {
        icon: <VoltIcon color={pathname === `${basePath}/volt`} />,
        label: 'Volt',
        isActive: pathname === `${basePath}/volt`,
        href: `${basePath}/volt`,
      },
      {
        icon: <MeetingIcon color={pathname === `${basePath}/meeting`} />,
        label: 'Meeting',
        isActive: pathname === `${basePath}/meeting`,
        href: `${basePath}/meeting`,
      },
      {
        icon: <MessagesIcon color={pathname === `${basePath}/message`} />,
        label: 'Message',
        isActive: pathname === `${basePath}/message`,
        href: `${basePath}/message`,
      },
      {
        icon: <MyCourseIcon color={pathname === `${basePath}/mypage`} />,
        label: 'My page',
        isActive: pathname === `${basePath}/mypage`,
        href: `${basePath}/mypage`,
      },
      {
        icon: <LogOutIcon color={pathname === `${basePath}/logout`} />,
        label: 'Log Out',
        isActive: pathname === `${basePath}/logout`,
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
