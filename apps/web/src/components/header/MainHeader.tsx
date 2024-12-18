import { getMyProfileImage } from '@repo/web/actions/profile/getProfileData';
import { Sidebar } from '../common/Sidebar';
import MainHeaderGNB from './MainHeaderGNB';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderRightMenu from './MainHeaderRightMenu';

export default async function MainHeader({ isAuth }: { isAuth: boolean }) {
  let userProfile = null; // userProfile을 여기서 미리 정의

  if (isAuth) {
    userProfile = await getMyProfileImage();
  }

  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-20">
      <header className="container mx-auto flex flex-row justify-between items-center py-5 px-4">
        <MainHeaderLogo />
        <MainHeaderGNB />
        <MainHeaderRightMenu
          isAuth={isAuth}
          profileImageUrl={userProfile ? userProfile.profileImageUrl : null} // 값이 있을 때만 접근
        />
      </header>
    </div>
  );
}
