import AdaptorsLogoIcon from '../../assets/icons/AdaptorsLogo';
import MeetingRoomNavCategories from './SidebarCategories';

function Sidebar() {
  return (
    <aside className="w-[16rem] h-screen bg-white lg:left-[0rem] fixed z-[100] left-[-16rem] top-0 shadow-md transition-all duration-500">
      <AdaptorsLogoIcon className="p-6 md:pt-5 flex items-center gap-2" />
      <MeetingRoomNavCategories />
    </aside>
  );
}

export default Sidebar;
