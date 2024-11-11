import ArrowRightIcon from '../../../assets/icons/ArrowRight';
import FitImage from '../../../ui/image/fit-image';

export default function ShareMentoring() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-gray-600">모두가 멘토가 될 수 있습니다.</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            멘토가 되어 보세요 - !
            <br />
            당신의 경험과 지식을 공유해보세요.
          </h2>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] max-w-md mx-auto">
            <FitImage
              src="/assets/images/footerImage.svg"
              alt="Footer Image"
              className="absolute"
            />
            <button className="absolute top-2/3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 bg-[#FFD84D] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFD84D]/90">
              Get Started Now
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
