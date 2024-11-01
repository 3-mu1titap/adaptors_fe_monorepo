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

  const routes: SidebarType[] = useMemo(() => {
    return [
      {
        icon: <OverviewIcon color={pathname === '/mentor' && true} />,
        label: 'Home',
        isActive: pathname === '/mentor',
        href: '/mentor',
      },
      {
        icon: <CalendarIcon color={pathname === '/mentor/calendar' && true} />,
        label: 'Calendar',
        isActive: pathname === '/mentor/calendar',
        href: '/mentor/calendar',
      },
      {
        icon: <VoltIcon color={pathname === '/mentor/volt' && true} />,
        label: 'Volt',
        isActive: pathname === '/mentor/volt',
        href: '/mentor/volt',
      },
      {
        icon: <MeetingIcon color={pathname === '/mentor/meeting' && true} />,
        label: 'Meeting',
        isActive: pathname === '/mentor/meeting',
        href: '/mentor/meeting',
      },
      {
        icon: <MessagesIcon color={pathname === '/mentor/message' && true} />,
        label: 'Message',
        isActive: pathname === '/mentor/message',
        href: '/mentor/message',
      },
      {
        icon: <MyCourseIcon color={pathname === '/mentor/mypage' && true} />,
        label: 'My page',
        isActive: pathname === '/mentor/mypage',
        href: '/mentor/mypage',
      },
      {
        icon: <LogOutIcon color={pathname === '/mentor/logout' && true} />,
        label: 'Log Out',
        isActive: pathname === '/mentor/logout',
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
