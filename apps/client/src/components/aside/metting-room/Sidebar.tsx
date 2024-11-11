'use client';

import { useAsideNavigationStore } from '../../../store/asideNavigationStore';
import AdaptorsLogoIcon from '../../assets/icons/AdaptorsLogo';
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';
import ContainerIcon from '../../assets/icons/Container';
import MeetingRoomNavCategories from './SidebarCategories';
import { useEffect, useState } from 'react';

function Sidebar() {
  const { useNavigation, setUseNavigation } = useAsideNavigationStore();
  const [isVisible, setIsVisible] = useState(useNavigation);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (useNavigation) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [useNavigation]);

  return (
    <>
      {isVisible && (
        <aside
          className={`w-[256px] h-screen bg-white shadow-md transition-transform duration-300 ${
            useNavigation ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            transform: useNavigation ? 'translateX(0)' : 'translateX(-100%)',
            opacity: useNavigation ? 1 : 0,
          }}
        >
          <AdaptorsLogoIcon className="w-[256px] mt-10 p-6 flex items-center gap-2" />
          <MeetingRoomNavCategories />
        </aside>
      )}

      <button
        onClick={setUseNavigation}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute left-[13rem] z-[150] p-2 rounded transition-all duration-500 ${
          useNavigation ? '' : '!left-[0rem]'
        }`}
      >
        {useNavigation ? (
          <ArrowLeftIcon color={isHovered} />
        ) : (
          <ContainerIcon color={isHovered} />
        )}
      </button>
    </>
  );
}

export default Sidebar;
