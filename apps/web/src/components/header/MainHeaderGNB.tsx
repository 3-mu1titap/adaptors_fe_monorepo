import { headerGNBMenuData } from 'src/store/initialStore';
import MainHeaderGNBMenuItem from './MainGNBMenuItem';

function MainHeaderGNB() {
  return (
    <nav className="block md:visible justify-center text-sm ml-2 md:flex sm:flex sm:justify-center md:justify-center lg:flex w-full">
      <ul className="text-base  justify-center lg:text-lg flex gap-x-2 md:gap-x-12 lg:gap-x-8">
        {headerGNBMenuData.map((item) => (
          <MainHeaderGNBMenuItem key={item.label} menuItem={item} />
        ))}
      </ul>
    </nav>
  );
}
export default MainHeaderGNB;
