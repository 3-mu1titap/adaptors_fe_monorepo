import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import Image from 'next/image';
function MentorDetailProfile({
  MentorProfile,
}: {
  MentorProfile: userProfileType;
}) {
  return (
    <div className="min-w-[18rem] h-full   flex flex-col space-y-4">
      <div className="bg-white flex flex-col  rounded-xl m-7 py-7">
        <div className="flex flex-col w-[150px] h-[270px] ml-10 items-center">
          <Image
            src={MentorProfile.profileImageUrl}
            width={100}
            height={120}
            alt="설명"
            className="object-cover w-[150px] h-[200px] rounded-full border-4 border-gray-200"
          ></Image>

          <span className="text-4xl py-4 text-center font-bold text-nowrap">
            {MentorProfile.nickName}
          </span>
        </div>
        {/* 멘토링 정보 관련 */}
        <div className="flex flex-col  py-4 items-start ml-12 space-y-4">
          {/* 총 수강수 */}
          <div className="flex flex-col items-start">
            <span className="text-xl">총 수강수</span>
            <span className="font-bold text-2xl">1244</span>
          </div>

          {/* 수강 평점 */}
          <div className="flex flex-col">
            <span className="text-xl">수강 평점</span>
            <span className="font-bold text-2xl">4.5</span>
          </div>

          {/* 수강평수 */}
          <div className="flex flex-col">
            <span className="text-xl">수강평수</span>
            <span className="font-bold text-2xl">1334</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorDetailProfile;
