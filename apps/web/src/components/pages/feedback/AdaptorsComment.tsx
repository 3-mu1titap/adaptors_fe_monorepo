import { UserProfile } from '@repo/ui/components/ui/custom/index';
import volpang from '../../assets/images/volpang.png';
import FitImage from '../../ui/image/fit-image';

export default function AdaptorsComment({
  feedbackContent,
  nickname,
}: {
  feedbackContent: string;
  nickname: string;
}) {
  return (
    <section className="flex-1 relative mb-8">
      <div className="flex items-center text-2xl gap-2 w-full py-2 px-4">
        <UserProfile size={32} />
        {nickname}님
      </div>
      {/* <h2 className="py-2 px-4 text-2xl text-gray-400">
        볼팡이가
        <span className="text-[#4079be] font-semibold">{nickname}님</span>의
        멘토링 진행을 분석했어요
      </h2> */}
      <p className="leading-relaxed pt-2 pb-10 px-4 text-xl bg-gray-200/60 rounded-lg mx-4 mt-4 relative">
        {feedbackContent}
        <span className="absolute bottom-3 right-3 text-md text-gray-300">
          위 내용은 AI를 통해 분석된 내용으로 잘못된 응답일 수 있습니다
        </span>
      </p>
      <FitImage
        src={volpang.src}
        alt="볼팡이 - adaptors의 마스코트"
        className="w-[45%] transform scale-x-[-1]"
      />
    </section>
  );
}
