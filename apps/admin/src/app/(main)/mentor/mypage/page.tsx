import { GetUserInfo } from '@repo/admin/actions/mypage/mypageAction';
import MyPage from '@repo/admin/components/pages/main/mentor/mypage/MyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `My Page`,
};

export default async function Page() {
  const userInfo = await GetUserInfo();
  return <MyPage userInfo={userInfo} />;
}
