import AdaptorsLogoIcon from '../../assets/icons/AdaptorsLogo';
import AdaptorcConcentImage from '../../assets/images/AdaptorcConcentImage';

export default function IntroCard({ className = '' }: { className?: string }) {
  return (
    <section className={`hidden lg:block lg:w-[400px] lg:px-8 ${className}`}>
      <AdaptorsLogoIcon className="lg:w-[297px]" />
      <div className="hidden lg:flex flex-col gap-3 mt-10 mb-10">
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
      <AdaptorcConcentImage className={``} />
    </section>
  );
}
