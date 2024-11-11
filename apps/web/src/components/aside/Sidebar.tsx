// 'use client';
// import { useEffect, useState } from 'react';
// import { useNavigationStore } from '../../store/asideNavigationStore';
// import ArrowLeftIcon from '../assets/icons/ArrowLeft';
// import ContainerIcon from '../assets/icons/ContainerIcon';
// import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
// import SidebarCategories from './SidebarCategories';
// function sidebar() {
//   const { isNavigation, setNavigation } = useNavigationStore();
//   const [isVisible, setIsVisible] = useState(isNavigation);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isNavigation) {
//       setIsVisible(true);
//     }

//     //닫일때
//     else {
//       const timer = setTimeout(() => setIsVisible(false), 200);

//       //작업종료
//       return () => clearTimeout(timer);
//     }
//   }, [isNavigation]);

//   return (
//     <>
//       {/* isVisible 애니메이션 상태관ㄹ */}
//       {isVisible && (
//         <aside
//           className={`w-[256px] h-screen bg-white shadow-md transition-transform duration-300 ${isVisible ? 'transition-x-0' : 'translate-x-full'} `}
//           style={{
//             transform: isNavigation ? 'translateX(0)' : 'translateX(-100%)',
//             opacity: isNavigation ? 1 : 0,
//           }}
//         >
//           <AdaptorsLogoIcon className="w-[256px] mt-10 p-6 flex items-center gap-2" />
//           <SidebarCategories />
//         </aside>
//       )}

//       {/* hover 아이콘 색상 번경 */}
//       <button
//         onClick={setNavigation}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`absolute left-[13rem] z-[150] p-2 rounded transition-all duration-500 ${
//           isNavigation ? '' : '!left-[0rem]'
//         }`}
//       >
//         {isNavigation ? (
//           <ArrowLeftIcon color={isHovered} />
//         ) : (
//           <ContainerIcon color={isHovered} />
//         )}
//       </button>
//     </>
//   );
// }

// export default sidebar;
