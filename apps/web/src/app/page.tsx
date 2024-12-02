import Splash from '@components/pages/main/splash/Splash';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';

export default function Page() {
  return (
    <CommonLayout
      className={`h-svh w-full bg-[url('/assets/images/background.svg')] bg-center bg-no-repeat bg-cover`}
    >
      <Splash />
    </CommonLayout>
  );
}
