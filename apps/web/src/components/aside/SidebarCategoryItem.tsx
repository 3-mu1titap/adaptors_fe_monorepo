// import Link from 'next/link';
// import React, { ReactElement, useState } from 'react';
// import { SidebarType } from '../types/navigation/navigationTypes';
// import SubCategory from './SubCategory';
// function SidebarCategory({ item }: { item: SidebarType }) {
//   const [categoryState, setcategoryState] = useState([
//     { label: item.label, state: item.state },
//   ]);

//   const toggleState = (label: string) => {
//     //(preState)의 인자값은 이전 값을 의미
//     setcategoryState((preState) =>
//       //react는 배열이나 객체형태는 새로 객체를 생성해야 한다.
//       preState.map((item) =>
//         item.label === label ? { ...item, state: !item.state } : item
//       )
//     );
//   };

//   const isActive = categoryState.find((cat) => cat.label === item.label)?.state;
//   console.log(isActive, 'state');
//   console.log(categoryState, 'state1');
//   return (
//     <Link href={item.href}>
//       <li
//         className={`w-full absolute-top-10 cursor-pointer grid grid-cols-6 gap-x-7 text-lg items-center border-l-8 border-transparent hover:border-adaptorsBlue py-4 px-2 ${item.isActive ? 'border-adaptorsBlue' : 'border-transparent'}`}
//       >
//         <span></span>
//         {item.icon}
//         <span
//           className={`col-span-3 whitespace-nowrap ${item.isActive ? 'text-adaptorsBlue' : 'text-adaptorsGray'}`}
//         >
//           {item.label}
//         </span>

//         <button onClick={() => toggleState(item.label)}>V</button>

//         {/* 세부 카테고리 */}
//         {isActive && item.subcategory && item.subcategory.length > 0 && (
//           <ul className="w-[258px] h-[140px] flex flex-col overflow-hidden transition-all duration-300 items-center justify-center py-4">
//             {item.subcategory.map((subItem) => (
//               <SubCategory key={subItem.id} item={subItem} />
//             ))}
//           </ul>
//         )}
//       </li>
//     </Link>
//   );
// }

// export default SidebarCategory;
