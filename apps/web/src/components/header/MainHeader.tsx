import MainHeaderGNB from './MainHeaderGNB';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderRightMenu from './MainHeaderRightMenu';

export default function MainHeader({
  isAuth,
  profileImage,
}: {
  isAuth: boolean;
  profileImage: string;
}) {
  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-20">
      <header className="container mx-auto flex flex-row justify-between items-center py-5 px-4">
        <MainHeaderLogo />
        <MainHeaderGNB />
        <MainHeaderRightMenu isAuth={isAuth} profileImage={profileImage} />
      </header>
    </div>
  );
}
