import JoinFunnel from '@components/form/JoinFunnel';
import IntroCard from '@components/pages/member/IntroCard';
import SignUpTitle from '@components/pages/member/SignUpTitle';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';

export default function page() {
  return (
    <CommonLayout className="h-svh flex items-start justify-center px-8 lg:gap-10 md:items-center bg-[#F9F9F9]">
      <IntroCard />
      <section className="w-full mt-[2rem] sm:mt-[5rem] sm:max-w-[468px] sm:px-8 sm:py-10 sm:bg-white md:mt-0 md:max-w-[80%] lg:max-w-[468px] rounded-[5%] z-10">
        <SignUpTitle />
        <JoinFunnel />
      </section>
    </CommonLayout>
  );
}
