import { CommonLayout } from '@components/common/commomLayout';
import ArrowRightIcon from '../../../assets/icons/ArrowRight';
import FitImage from '../../../ui/image/fit-image';
import NextButton from '@components/ui/Button/NextButton';

export default function ShareMentoring() {
  return (
    <CommonLayout
      type="section"
      reative="container"
      className="mx-auto mt-[5rem] px-4 md:px-8 xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[90%] relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="space-y-2 text-center md:text-left mr-4 w-full md:w-3/6">
          <p className="text-yellow-400 text-md">
            모두가 멘토가 될 수 있습니다.
          </p>
          <h2 className="text-2xl md:text-3xl font-thin tracking-tighter leading-tight">
            <span className="text-4xl font-extrabold">
              멘토가 되어 보세요 - !
            </span>
            <br />
            당신의 경험과 지식을 공유해보세요.
          </h2>
        </div>

        <div className="w-full max-w-[380px] md:w-3/6 relative mt-10">
          <FitImage src="/assets/images/footerImage.svg" alt="Footer Image" />
          <NextButton
            className="absolute bottom-10 left-1/2 translate-x-[-50%] rounded-full w-[200px]"
            text="Entry to Mentor"
          />
        </div>
      </div>
    </CommonLayout>
  );
}
