'use client';
import React, { useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { MyPageSidebarType } from '../../../types/navigation/navigationTypes';
import MyPageCategory from './MyPageCategory';
import MyPageDetailCategory from './MyPageDetailCategory';
function MyPageSidebarCategories() {
  const pathname = usePathname();
  const basePath = pathname.startsWith('/mentor/mypage')
    ? '/mentor/mypage'
    : '/mentee/mypage';

  const Mypagerouters: MyPageSidebarType[] = useMemo(() => {
    return [
      {
        id: 0,
        label: '개인정보수정',
        isActive: pathname === `${basePath}/editinfo`,
        href: `${basePath}/editinfo`,
        subcategory: [],
      },
      {
        id: 1,
        label: '나의수강정보',
        isActive: pathname === `${basePath}/mymentoring`,
        href: `${basePath}/mymentoring`,
        subcategory: [],
      },
      {
        id: 2,
        label: '평가보기',
        isActive: pathname === `${basePath}/evaluation`,
        href: `${basePath}/evaluation`,
        subcategory: [
          {
            label: '면접',
            isActive: pathname === `${basePath}/interview`,
            href: `${basePath}/interview`,
          },
          {
            label: '포트폴리오',
            isActive: pathname === `${basePath}/portfolio`,
            href: `${basePath}/portfolio`,
          },
          {
            label: '이력서',
            isActive: pathname === `${basePath}/resume`,
            href: `${basePath}/resume`,
          },
          {
            label: '자기소개서',
            isActive: pathname === `${basePath}/selfintroduction`,
            href: `${basePath}/selfintroduction`,
          },
        ],
      },
      {
        id: 3,
        label: '나의리뷰',
        isActive: pathname === `${basePath}/myreview`,
        href: `${basePath}/myreview`,
        subcategory: [],
      },
      {
        id: 4,
        label: '블랙리스트관리',
        isActive: pathname === `${basePath}/blacklist`,
        href: `${basePath}/blacklist`,
        subcategory: [],
      },
      {
        id: 5,
        label: '나의 관심정보',
        isActive: pathname === `${basePath}/mylike`,
        href: `${basePath}/mylike`,
        subcategory: [],
      },
    ];
  }, [pathname]);
  return (
    <nav className="flex w-full  justify-center mt-12">
      <ul className="flex w-full justify-center h-[300px]">
        {Mypagerouters.map((item: MyPageSidebarType, index: number) => (
          <li key={item.id} className="flex flex-col items-start mb-4">
            <MyPageCategory key={item.id} item={item} />

            {/* 서브카테고리 렌더링 */}
            {item.subcategory.length > 0 && (
              <ul className="pl-4 mt-2">
                {item.subcategory.map((subItem, subIndex) => (
                  <MyPageDetailCategory key={subIndex} item={subItem} />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MyPageSidebarCategories;
