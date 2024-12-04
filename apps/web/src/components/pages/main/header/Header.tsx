import AdaptorsLogoIcon from '../../../assets/icons/AdaptorsLogo';
import RightIcon from '../../../assets/icons/Right';
import HeaderMenu from './HeaderMenu';
function Header() {
  const menu = [
    {
      label: 'Home',
      href: '/main/Home',
    },

    {
      label: 'AboutMe',
      href: '/main/AboutMe',
    },

    {
      label: 'Services',
      href: '/main/Service',
    },

    {
      label: 'Courses',
      href: 'main/Courses',
    },

    {
      label: 'Faq',
      href: 'main/Faq',
    },
  ];

  return (
    <header className="flex flex-row py-6 w-full items-center">
      {/* 로고 */}
      <AdaptorsLogoIcon className="w-[217px] h-[77px] justify-start" />

      {/* 메뉴 */}
      <ul className="flex-grow flex justify-center items-center space-x-4">
        {menu.map((item, index) => (
          <HeaderMenu key={index} item={item} />
        ))}
      </ul>

      {/* 오른쪽 아이콘 */}
      <div className="flex justify-end">
        <RightIcon className="flex justify-center" />
      </div>
    </header>
  );
}

export default Header;
