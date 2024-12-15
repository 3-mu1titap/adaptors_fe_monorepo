import { UserProfile } from '@repo/ui/components/ui/custom/index';
import volpang from '../../assets/images/meow.png';
import FitImage from '../../ui/image/fit-image';

export default function AdaptorsComment({
  feedbackContent,
  nickname,
}: {
  feedbackContent: string;
  nickname: string;
}) {
  return (
    <section className="flex-1 border-2 m-6 relative">
      <div className="flex items-center text-2xl gap-2 w-full border-b-2 py-2 px-4">
        <UserProfile size={32} />
        {nickname}님
      </div>
      <h2 className="py-2 px-4 text-2xl text-gray-400">
        볼팡이가
        <span className="text-[#4079be] font-semibold">{nickname}님</span>의
        멘토링 진행을 분석했어요
      </h2>
      <p className="leading-relaxed py-2 px-4 text-xl bg-gray-200/60 rounded-lg mx-4">
        {feedbackContent}
      </p>
      <FitImage src={volpang} className="w-[40%] p-4" />
      <p className="absolute bottom-3 right-3 text-md text-gray-300">
        위 내용은 AI를 통해 분석된 내용으로 잘못된 응답일 수 있습니다
      </p>
    </section>
  );
}
