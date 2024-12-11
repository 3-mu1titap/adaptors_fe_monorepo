import { Metadata } from 'next';
import { GetUserInfo } from '@repo/web/actions/profile/getProfileData';
import MyPage from '@repo/web/components/pages/main/mypage/MyPage';

export const metadata: Metadata = {
  title: `My Page`,
};

export default async function Page() {
  const userInfo = await GetUserInfo();
  return <>{userInfo && <MyPage userInfo={userInfo} />}</>;
}
