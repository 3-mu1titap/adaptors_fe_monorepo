import { useSidebar } from '@repo/ui/components/ui/sidebar';
import { MypageData } from 'src/store/initialStore';
import MainHeaderGNBMenuItem from './MainGNBMenuItem';

export default function MypageNav() {
  const { isMobile, open } = useSidebar();
  return (
    <nav className={`flex w-full justify-center ${isMobile ? '' : ''}`}>
      <ul className="text-base lg:text-lg flex gap-x-4 lg:gap-x-8">
        {MypageData.map((item) => (
          <MainHeaderGNBMenuItem key={item.label} menuItem={item} />
        ))}
      </ul>
    </nav>
  );
}
