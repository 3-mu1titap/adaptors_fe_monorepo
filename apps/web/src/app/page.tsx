import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import Splash from '@repo/web/components/pages/main/splash/Splash';

export default function Page() {
  return (
    <CommonLayout
      className={`h-svh w-full bg-[url('/assets/images/background.svg')] bg-center bg-no-repeat bg-cover`}
    >
      <Splash />
    </CommonLayout>
  );
}
