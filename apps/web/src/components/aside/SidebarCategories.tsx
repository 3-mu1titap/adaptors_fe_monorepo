// 'use client';

// import { usePathname } from 'next/navigation';
// import CalendarIcon from '../assets/icons/Calendar';
// import LogOutIcon from '../assets/icons/LogOut';
// import MeetingIcon from '../assets/icons/Meeting';
// import MessagesIcon from '../assets/icons/Messages';
// import MyCourseIcon from '../assets/icons/MyCourse';
// import OverviewIcon from '../assets/icons/Overview';
// import VoltIcon from '../assets/icons/Volt';
// import { SidebarType } from '../types/navigation/navigationTypes';
// import { SubCategoryType } from '../types/navigation/navigationTypes';
// import { useMemo } from 'react';
// import SidebarCategory from './SidebarCategoryitem';
// import SubCategory from './SubCategory';
// function SidebarCategories() {
//   const pathName = usePathname();

//   //멘토 멘티 경로 설정
//   const basePath = pathName.startsWith('/mentee') ? '/mentee' : 'mentor';

//   const routers: SidebarType[] = useMemo(() => {
//     if (basePath === '/mentee') {
//       return [
//         {
//           id: 0,
//           icon: (
//             <OverviewIcon
//               color={
//                 pathName === `/mentee` ||
//                 (pathName.startsWith(`/mentee/mentoring`) && true)
//               }
//             />
//           ),
//           label: 'Home',
//           isActive:
//             pathName === `/mentee` || pathName.startsWith(`/mentee/mentoring`),
//           href: `/mentee`,
//           state: false,
//           subcategory: [
//             { id: 0, label: 'dummy' },
//             { id: 1, label: 'dummy' },
//             { id: 2, label: 'dummy' },
//             { id: 3, label: 'dummy' },
//           ],
//         },
//         {
//           id: 1,
//           icon: (
//             <CalendarIcon
//               color={pathName.startsWith(`/mentee/schedule`) && true}
//             />
//           ),
//           label: 'Schedule',
//           isActive: pathName.startsWith(`/mentee/schedule`),
//           href: `/mentee/schedule`,
//           state: false,
//           subcategory: [
//             { id: 0, label: 'dummy' },
//             { id: 1, label: 'dummy' },
//             { id: 2, label: 'dummy' },
//             { id: 3, label: 'dummy' },
//           ],
//         },
//         {
//           id: 2,
//           icon: <VoltIcon color={pathName.startsWith(`/mentee/volt`)} />,
//           label: 'Volt',
//           isActive: pathName.startsWith(`/mentee/volt`),
//           href: `/mentee/volt`,
//           state: false,
//           subcategory: [
//             { id: 0, label: 'dummy' },
//             { id: 1, label: 'dummy' },
//             { id: 2, label: 'dummy' },
//             { id: 3, label: 'dummy' },
//           ],
//         },
//         {
//           id: 3,
//           icon: <MeetingIcon color={pathName.startsWith(`/mentee/meeting`)} />,
//           label: 'Meeting',
//           isActive: pathName.startsWith(`/mentee/meeting`),
//           href: `/mentee/meeting`,
//           state: false,
//           subcategory: [
//             { id: 0, label: 'dummy' },
//             { id: 1, label: 'dummy' },
//             { id: 2, label: 'dummy' },
//             { id: 3, label: 'dummy' },
//           ],
//         },
//         {
//           id: 4,
//           icon: <MessagesIcon color={pathName.startsWith(`/mentee/message`)} />,
//           label: 'Message',
//           isActive: pathName.startsWith(`/mentee/message`),
//           href: `/mentee/message`,
//           state: false,
//           subcategory: [
//             { id: 0, label: 'dummy' },
//             { id: 1, label: 'dummy' },
//             { id: 2, label: 'dummy' },
//             { id: 3, label: 'dummy' },
//           ],
//         },
//         {
//           id: 5,
//           icon: <MyCourseIcon color={pathName.startsWith(`/mentee/mypage`)} />,
//           label: 'My page',
//           isActive: pathName.startsWith(`/mentee/mypage`),
//           href: `/mentee/mypage`,
//           state: false,
//           subcategory: [
//             { id: 0, label: 'dummy' },
//             { id: 1, label: 'dummy' },
//             { id: 2, label: 'dummy' },
//             { id: 3, label: 'dummy' },
//           ],
//         },
//         {
//           icon: <LogOutIcon color={pathName.startsWith(`/mentee/logout`)} />,
//           label: 'Log Out',
//           isActive: pathName.startsWith(`/mentee/logout`),
//           href: '#',
//           state: false,
//         },
//       ];
//     }
//     return [];
//   }, [pathName]);

//   return (
//     <nav className="w-full flex flex-col justify-center items-center ">
//       <ul className="w-full flex flex-col justify-center items-center text-lg">
//         {routers.map((item: SidebarType, index: number) => (
//           <SidebarCategory key={index} item={item} />
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default SidebarCategories;
