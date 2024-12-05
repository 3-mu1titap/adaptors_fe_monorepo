import { GetUserInfo } from '@repo/client/actions/mypage/mypageAction';
import MyPage from '@repo/client/components/pages/main/mentor/mypage/MyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `My Page`,
};

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

export default async function Page() {
  const userInfo = await GetUserInfo(userUuid);
  return <MyPage userInfo={userInfo} />;
}
