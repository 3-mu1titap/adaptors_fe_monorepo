import MyPage from '@repo/client/components/pages/main/mentor/mypage/MyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `My Page`,
};

export default async function Page() {
  return <MyPage />;
}
