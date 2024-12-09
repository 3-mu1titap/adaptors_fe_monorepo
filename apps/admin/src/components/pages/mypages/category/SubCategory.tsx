import React, { ReactElement } from 'react';

interface NavItemProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function MypageSubCategory({ isActive, onClick, label }: NavItemProps) {
  return (
    <li
      onClick={onClick}
      className={`flex-col w-full items-center justify-center py-2 ${isActive ? 'text-[#0060FF]' : 'text-[#ACACAC]'}`}
    >
      <span></span>
      <span className="col-span-2 whitespace-nowrap text-base">{label}</span>
      {/* 여기가 분자 */}
    </li>
  );
}

export default MypageSubCategory;
