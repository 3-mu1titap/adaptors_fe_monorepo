import React from 'react';
import Link from 'next/link';
function sidebar() {
  const categoryItems = [
    { id: 0, label: '관심목록', href: '/mypage/like' },
    { id: 1, label: '블랙리스트', href: '/mypage/blacklist' },
    { id: 0, label: '나의수강정보', href: '/mypage/mymentoring' },
  ];

  return (
    <nav className="max-w-[300px] py-12">
      <ul className="flex flex-col max-w-[250px] gap-y-60 bg-red-600">
        {categoryItems.map((item) => (
          <li key={item.id} className="flex justify-center">
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default sidebar;
