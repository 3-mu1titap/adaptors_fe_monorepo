import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import LikeButton from '@repo/web/components/ui/Button/LikeButton';
import Share from '../../../assets/icons/Share';
import FitImage from '../../../ui/image/fit-image';
export default function MentoProfile({
  mentorUuid,
  mentorProfile,
}: {
  mentorUuid: string;
  mentorProfile: userProfileType;
}) {
  return (
    <div className="space-y-4">
      <FitImage
        src={mentorProfile.profileImageUrl}
        alt="Profile"
        className="object-cover p-2"
      />

      <div className="px-1">
        <h1 className="text-3xl font-bold mb-3">@ {mentorProfile.nickName}</h1>
        <div className="flex justify-between w-full mb-3">
          {/* <ParticipateAndUnit maxVisible={4} /> */}
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
