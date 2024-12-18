import { getServerSession } from 'next-auth';
import MainHeaderGNB from './MainHeaderGNB';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderRightMenu from './MainHeaderRightMenu';
import { options } from '@repo/web/app/api/auth/[...nextauth]/options';
import { getMyProfileIamge } from '@repo/web/actions/profile/getProfileData';

export default async function MainHeader({ isAuth }: { isAuth: boolean }) {
  const userProfile = await getMyProfileIamge();
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
