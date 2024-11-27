import LikeButton from '@components/ui/Button/LikeButton';
import { getProfileIamge } from 'src/actions/profile/getProfileData';
import Share from '../../../assets/icons/Share';
import FitImage from '../../../ui/image/fit-image';
import MentorReviewOverview from './review/MentorReviewOverview';
export default async function MentoProfile({
  mentorUuid,
}: {
  mentorUuid: string;
}) {
  //멘토 프로필 요청하기
  const mentorProfile = await getProfileIamge(mentorUuid);
  console.log(mentorProfile.profileImageUrl);
  return (
    <div className="space-y-4">
      <FitImage
        src={mentorProfile.profileImageUrl}
        alt="Profile"
        className="object-cover p-4"
      />

      <div className="px-3">
        <h1 className="text-3xl font-bold mb-3">@ {mentorProfile.nickName}</h1>
        <div className="flex justify-between w-full mb-3">
          {/* 리뷰 수 들어갈부분 */}
          {/* <LikeButton count={29823} mentorUuid={mentorUuid} /> */}
          <MentorReviewOverview maxVisible={4} />
          <LikeButton count={200823} mentorUuid={mentorUuid} />
        </div>
      </div>
      <button className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded-lg text-lg font-semibold flex gap-1 items-center justify-center">
        <Share />
        SHARE THIS MENTOR
      </button>
    </div>
  );
}
