import MainHeaderGNB from './MainHeaderGNB';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderRightMenu from './MainHeaderRightMenu';
import { getMyProfileImage } from '@repo/web/actions/profile/getProfileData';

export default async function MainHeader({ isAuth }: { isAuth: boolean }) {
  const userProfile = await getMyProfileImage();
  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-20">
      <header className="container mx-auto flex flex-row justify-between items-center py-5 px-4">
        <MainHeaderLogo />
        <MainHeaderGNB />
        <MainHeaderRightMenu
          isAuth={isAuth}
          profileImageUrl={userProfile.profileImageUrl}
        />
      </header>
    </div>
  );
}
