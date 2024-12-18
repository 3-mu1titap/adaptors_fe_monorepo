import { UserProfile } from '@repo/ui/components/ui/custom/index';
import Image from 'next/image';
import volpang from '../../assets/images/volpang.png';
import { Bubble } from './Bubble';

export default function AdaptorsComment({
  feedbackContent,
  nickname,
  profileImageUrl,
}: {
  feedbackContent: string;
  nickname: string;
  profileImageUrl: string;
}) {
  return (
    <section className="flex-1 relative mb-8 px-4">
      <h3 className="flex items-center text-2xl gap-2 w-full py-2 px-4 font-semibold">
        <UserProfile size={32} profileImgUrl={profileImageUrl} />
        {nickname}님!!
      </h3>
      <div className="py-2 px-4 text-xl text-gray-600">
        📬 볼팡이의 쪽지가 도착했어요!
        <p className="text-md text-gray-400 m-0">
          <br /> 볼팡이가 {nickname}님의 멘토링 데이터를 기반으로 정성스럽게
          분석한 내용입니다
          <br /> 쪽지를 확인하고 효율적으로 멘토링을 계획해보세요!
        </p>
      </div>
      {/* <p className="leading-relaxed pt-2 pb-10 px-4 text-xl bg-gray-200/60 rounded-lg mx-4 mt-4 relative">
        {feedbackContent}
        <span className="absolute bottom-3 right-3 text-md text-gray-300">
          위 내용은 AI를 통해 분석된 내용으로 잘못된 응답일 수 있습니다
        </span>
      </p> */}
      <div className="w-full ">
        <Image
          src={volpang.src}
          alt="볼팡이 - adaptors의 마스코트"
          width={500}
          height={500}
          className="max-w-[300px]"
        />
        <Bubble comment={feedbackContent}></Bubble>
      </div>
    </section>
  );
}
