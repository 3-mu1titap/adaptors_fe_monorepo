import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import AdaptorcConcentImage from '@repo/web/components/assets/images/AdaptorcConcentImage';
import IntroCard from '@repo/web/components/pages/member/IntroCard';
import Login from '@repo/web/components/pages/member/Login';

export default function page({
  searchParams,
}: {
  searchParams: {
    id: string;
    password: string;
  };
}) {
  return (
    <CommonLayout className="h-svh flex items-start justify-center px-8 lg:gap-10 lg:items-center bg-[#F9F9F9]">
      <IntroCard />
      <section className="w-full mt-[2rem] sm:mt-[5rem] sm:max-w-[468px] sm:px-8 sm:py-10 sm:bg-white rounded-[5%] z-10">
        <Login id={searchParams.id} pw={searchParams.password} />
      </section>
      <AdaptorcConcentImage
        className={`absolute left-[10%] bottom-0 w-[45%] blur-sm lg:hidden`}
      />
    </CommonLayout>
  );
}
