// MypageCategoryies.tsx
import React from 'react';
import MypageCategory from './Category';
import MypageSubCategory from './SubCategory';

const categoryItems = [
  {
    id: 0,
    label: '개인정보 수정',
    subcategory: [
      {
        id: 0,
        name: '아이디 수정',
      },
    ],
  },
  {
    id: 1,
    label: '나의 수강 정보',
    subcategory: [
      {
        id: 0,
        name: '아이디 수정',
      },
    ],
  },
  {
    id: 2,
    label: '평가 보기',
    subcategory: [
      { id: 0, name: '면접' },
      { id: 1, name: '포트폴리오' },
      { id: 2, name: '이력서' },
      { id: 3, name: '자기소개서' },
    ],
  },
  {
    id: 3,
    label: '나의 리뷰',
    subcategory: [
      {
        id: 0,
        name: '아이디 수정',
      },
    ],
  },
  {
    id: 4,
    label: '블랙리스트 보기',
    subcategory: [
      {
        id: 0,
        name: '아이디 수정',
      },
    ],
  },
  {
    id: 5,
    label: '나의 관심멘토 보기',
    subcategory: [
      {
        id: 0,
        name: '아이디 수정',
      },
    ],
  },
];

function MypageCategoryies({
  level,
  onSelectStep,
  sublevel,
  onSelectSubStep,
}: {
  level: number;
  sublevel: number;
  onSelectStep: (num: number) => void;
  onSelectSubStep: (num: number) => void;
}) {
  return (
    <nav className="w-full flex flex-col items-center py-6 relative">
      <ul className="w-full flex flex-row justify-center items-center text-xl space-x-10">
        {categoryItems.map(({ id, label, subcategory }) => (
          <li key={id} className="relative">
            <MypageCategory
              isActive={level === id}
              onClick={() => onSelectStep(id)}
              label={label}
            />

            {/* 선택된 카테고리에 따라 서브 카테고리 표시 */}
            {level === id && subcategory.length > 0 && (
              <ul className="absolute top-full mt-0 left-0 flex flex-col items-start p-2">
                {subcategory.map((subItem) => (
                  <MypageSubCategory
                    key={subItem.id} // 서브 카테고리 고유 key 추가
                    isActive={sublevel === subItem.id}
                    onClick={() => onSelectSubStep(subItem.id)}
                    label={subItem.name}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MypageCategoryies;
