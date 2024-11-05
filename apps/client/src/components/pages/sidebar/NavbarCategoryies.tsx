import React from 'react';
import NavbarCategory from './NavbarCategory';
const categoryItems = [
  { id: 0, label: 'Home' },
  { id: 1, label: 'Category' },
  { id: 2, label: 'MentoringPush' },
  { id: 3, label: 'Feedback' },
  { id: 4, label: 'Search' },
];

function NavbarCategoryies({
  level,
  onSelectStep,
}: {
  level: number;
  onSelectStep: (num: number) => void;
}) {
  return (
    <nav className="w-full flex flex-row justify-center items-center py-6">
      <ul className="w-full flex flex-row justify-center items-center text-xl">
        {categoryItems.map(({ id, label }) => (
          <NavbarCategory
            key={id}
            isActive={level === id}
            onClick={() => onSelectStep(id)}
            label={label}
          />
        ))}
      </ul>
      {/* 여기가 유기체 입니다 */}
    </nav>
  );
}

export default NavbarCategoryies;
