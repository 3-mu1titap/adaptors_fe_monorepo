import {
  MemberInfo,
  MentorProfileInfo,
} from '@repo/admin/components/types/main/mentor/mentorTypes';
import FitImage from '@repo/admin/components/ui/image/fit-image';

export default function MentorProfileContent({
  profileImageUrl,
  memberRequestDto,
  mentorProfileRequestDto,
}: {
  profileImageUrl: string;
  memberRequestDto: MemberInfo;
  mentorProfileRequestDto: MentorProfileInfo;
}) {
  return (
    <>
      <div className="flex items-center mb-4">
        <div className="w-[10rem] h-[10rem] overflow-hidden">
          <FitImage
            className="w-full h-auto overflow-hidden rounded-full border-4 border-white"
            src={profileImageUrl}
            alt={memberRequestDto.name}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{memberRequestDto.name}</h2>
          <p className="text-gray-600">@{memberRequestDto.nickName}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Contact Information</h3>
          <p>Email: {memberRequestDto.email}</p>
          <p>Phone: {memberRequestDto.phoneNumber}</p>
          <p>Account ID: {memberRequestDto.accountId}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Mentor Profile</h3>
          <p>Field: {mentorProfileRequestDto.mentoringField}</p>
          <p>Age: {mentorProfileRequestDto.age}</p>
          <p>Gender: {mentorProfileRequestDto.gender}</p>
          <p>Job Experience: {mentorProfileRequestDto.jobExperience}</p>
        </div>
      </div>
    </>
  );
}
