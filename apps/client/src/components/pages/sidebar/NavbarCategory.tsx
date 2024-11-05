import React, { ReactElement } from 'react';

interface NavItemProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function NavbarCategory({ isActive, onClick, label }: NavItemProps) {
  return (
    <li
      onClick={onClick}
      className={`flex w-full items-center justify-center py-4 ${isActive ? 'text-[#0060FF]' : 'text-[#ACACAC]'}`}
    >
      <span></span>
      <span className="col-span-2 whitespace-nowrap">{label}</span>
      {/* 여기가 분자 */}
    </li>
  );
}

export default NavbarCategory;
