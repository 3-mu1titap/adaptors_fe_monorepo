import { Sidebar } from '../common/Sidebar';
import MainHeaderGNB from './MainHeaderGNB';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderRightMenu from './MainHeaderRightMenu';
//
export default function MainHeader({
  isAuth,
  userProfile,
}: {
  isAuth: boolean;
  userProfile: string;
}) {
  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-20">
      <header className="container mx-auto flex flex-row justify-between items-center py-5 px-4">
        <MainHeaderLogo />
        <MainHeaderGNB />
        <div className="flex items-center gap-2">
          <MainHeaderRightMenu
            isAuth={isAuth}
            profileImageUrl={userProfile} // 값이 있을 때만 접근
          />
          <Sidebar />
        </div>
      </header>
    </div>
  );
}
