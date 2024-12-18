import { headerGNBMenuData } from 'src/store/initialStore';
import MainHeaderGNBMenuItem from './MainGNBMenuItem';

function MainHeaderGNB() {
  return (
    <nav className="text-xs md:visible justify-center md:text-sm ml-2 md:flex sm:flex sm:justify-center md:gap-x-2 md:justify-center lg:flex w-full">
      <ul className="text-base lg:text-lg flex gap-x-4 lg:gap-x-8">
        {headerGNBMenuData.map((item) => (
          <MainHeaderGNBMenuItem key={item.label} menuItem={item} />
        ))}
      </ul>
    </nav>
  );
}
export default MainHeaderGNB;
