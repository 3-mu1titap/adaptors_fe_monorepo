import { Metadata } from 'next';
import { GetUserInfo } from '@repo/web/actions/profile/getProfileData';
import MyPage from '@repo/web/components/pages/main/mypage/MyPage';

export const metadata: Metadata = {
  title: `My Page`,
};

export default async function Page() {
  const userInfo = await GetUserInfo();
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-y-auto">
        {userInfo && <MyPage userInfo={userInfo} />}
      </div>
    </>
  );
}
