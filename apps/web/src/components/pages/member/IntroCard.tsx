import AdaptorsLogoIcon from '../../assets/icons/AdaptorsLogo';
import AdaptorcConcentImage from '../../assets/images/AdaptorcConcentImage';

export default function IntroCard({ className = '' }: { className?: string }) {
  return (
    <section
      className={`h-[100vh] w-full sm:w-80 py-16 px-8 absolute sm:static overflow-clip ${className}`}
    >
      <AdaptorsLogoIcon className="w-44 sm:w-[256px]" />
      <div className="hidden sm:flex flex-col gap-3 mt-10">
        <h1 className="text-5xl font-bold leading-[28px]">
          WELCOME BACK
          <br /> TO ADATORS
        </h1>
        <h2 className="text-lg">어뎁터서비스에 오신 것을 환영합니다.</h2>
        <h3 className="text-sm text-[#7D7D7D]">
          COPYRIGHT © 2024 ADAOTORS
          <br /> ALL RIGHTS RESERVED.
        </h3>
      </div>
      <AdaptorcConcentImage
        className={`absolute sm:static left-0 bottom-1 w-[50%] sm:w-[90%] sm:ml-4 sm:mt-20 overflow-clip`}
      />
    </section>
  );
}
