import { headerGNBMenuData } from 'src/store/initialStore';
import MainHeaderGNBMenuItem from './MainGNBMenuItem';

function MainHeaderGNB() {
  return (
    <nav className="hidden lg:flex w-full justify-center">
      <ul className="text-base lg:text-lg flex gap-x-4 lg:gap-x-8">
        {headerGNBMenuData.map((item) => (
          <MainHeaderGNBMenuItem key={item.label} menuItem={item} />
        ))}
      </ul>
    </nav>
  );
}
export default MainHeaderGNB;
