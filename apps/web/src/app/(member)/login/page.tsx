import IntroCard from '@components/pages/member/IntroCard';
import Login from '@components/pages/member/Login';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';

export default function page() {
  return (
    <CommonLayout className="h-[100vh] flex flex-col sm:flex sm:flex-row sm:justify-center items-center px-6 gap-4 lg:gap-10 sm:my-auto my-0 sm:py-auto ${style} bg-[#F9F9F9]">
      <IntroCard />
      <section className="w-[90%] mt-[130px] sm:my-auto sm:max-w-[418px] sm:px-8 sm:py-10 sm:bg-white rounded-[5%] z-10">
        <Login />
      </section>
    </CommonLayout>
  );
}
