import JoinFunnel from '@components/form/JoinFunnel';
import IntroCard from '@components/pages/member/IntroCard';
import SignUpTitle from '@components/pages/member/SignUpTitle';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';

export default function page() {
  return (
    <CommonLayout className="h-[100vh] flex flex-col sm:flex sm:flex-row sm:justify-center items-center px-6 gap-4 lg:gap-10 sm:my-auto my-0 sm:py-auto ${style} bg-[#F9F9F9]">
      <IntroCard className="hidden sm:block" />
      <section className="w-full my-auto sm:max-w-[418px] sm:px-8 sm:py-10 sm:bg-white rounded-[5%] z-10">
        <SignUpTitle />
        <JoinFunnel />
      </section>
    </CommonLayout>
  );
}
