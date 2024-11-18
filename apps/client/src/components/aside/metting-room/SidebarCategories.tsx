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
    if (basePath === '/mentor') {
      return [
        {
          icon: (
            <OverviewIcon
              color={
                pathname === `/mentor` ||
                (pathname.startsWith(`/mentor/mentoring`) && true)
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
            <CalendarIcon
              color={pathname.startsWith(`/mentor/schedule`) && true}
            />
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
