import { getProfileIamge } from 'src/actions/profile/getProfileData';
import Share from '../../../assets/icons/Share';
import FitImage from '../../../ui/image/fit-image';
export default async function MentoProfile({
  mentorUuid,
}: {
  mentorUuid: string;
}) {
  //멘토 프로필 요청하기
  const mentorProfile = await getProfileIamge(mentorUuid);
  console.log('mentorProfile', mentorProfile);
  return (
    <div className="space-y-4">
      <FitImage
        src={mentorProfile.profileImageUrl}
        alt="Profile"
        className="object-cover p-4"
      />

      <div>
        <h1 className="text-xl font-bold">@ {mentorProfile.nickName}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>78K Reviews</span>
          <span>•</span>
          <span className="text-red-500">♥ 213K is Good</span>
        </div>
      </div>
      <button className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded-lg text-lg font-semibold flex gap-1 items-center justify-center">
        <Share />
        SHARE THIS MENTOR
      </button>
    </div>
  );
}
