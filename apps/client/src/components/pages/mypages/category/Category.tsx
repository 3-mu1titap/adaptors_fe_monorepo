import React, { ReactElement } from 'react';

interface NavItemProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function MypageCategory({ isActive, onClick, label }: NavItemProps) {
  return (
    <div
      onClick={onClick}
      className={`relative flex w-full items-center justify-center py-4 ${isActive ? 'text-[#0060FF]' : 'text-[#ACACAC]'}`}
    >
      <span></span>
      <span className="col-span-2 whitespace-nowrap text-2xl">{label}</span>
      {/* 여기가 분자 */}
    </div>
  );
}

export default MypageCategory;
