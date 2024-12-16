import AdaptorcConcentImage from '@repo/ui/components/member/AdaptorcConcentImage';
import IntroCard from '@repo/ui/components/member/IntroCard';
import Login from '@repo/ui/components/member/Login';

export default function page() {
  return (
    <>
      <IntroCard />
      <section className="w-full sm:max-w-[468px] sm:px-8 sm:bg-white rounded-[5%] z-10 pb-6">
        <Login />
      </section>
      <AdaptorcConcentImage
        className={`absolute left-[10%] bottom-0 w-[45%] blur-sm lg:hidden`}
      />
    </>
  );
}
