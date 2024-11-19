import Splash from '@components/pages/main/splash/Splash';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';

export default function Page() {
  return (
    <CommonLayout
      className={`h-[100vh] w-[100vw] bg-[url('/assets/images/background.svg')] bg-cover bg-center bg-no-repeat grid grid-cols-1 md:grid-cols-5 md:items-center md:gap-x-36w`}
    >
      <Splash />
    </CommonLayout>
  );
}
