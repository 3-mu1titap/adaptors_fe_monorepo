import React, { ReactElement } from 'react';

interface NavItemProps {
  isActive: boolean;
  onClick: () => void;
  icon: ReactElement;
  label: string;
}

function MeetingRoomNavCategory({
  isActive,
  onClick,
  icon,
  label,
}: NavItemProps) {
  return (
    <li
      onClick={onClick}
      className={`w-full grid grid-cols-6 gap-x-7 text-lg items-center hover:border-2 hover:border-adaptorsBlue py-4 px-2 ${isActive ? 'text-adaptorsBlue border-l-4 border-adaptorsBlue' : 'text-adaptorsGray'}`}
    >
      <span></span>
      {React.cloneElement(icon)}
      <span className="col-span-3 whitespace-nowrap">{label}</span>
    </li>
  );
}

export default MeetingRoomNavCategory;
