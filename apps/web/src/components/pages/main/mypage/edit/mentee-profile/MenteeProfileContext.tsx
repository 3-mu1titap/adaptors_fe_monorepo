import {
  MenteeInfo,
  MenteeProfileInfo,
} from '@repo/web/components/types/mentee/MenteeType';
import FitImage from '@repo/web/components/ui/image/fit-image';

export default function MenteeProfileContent({
  profileImageUrl,
  memberRequestDto,
  menteeProfileRequestDto,
}: {
  profileImageUrl: string;
  memberRequestDto: MenteeInfo;
  menteeProfileRequestDto: MenteeProfileInfo;
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
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold mb-2">Mentee Profile</h3>
          {menteeProfileRequestDto ? (
            <>
              <p>Age: {menteeProfileRequestDto.age}</p>
              <p>Gender: {menteeProfileRequestDto.gender}</p>
              <p>Job Experience: {menteeProfileRequestDto.jobExperience}</p>
              <p>jobType: {menteeProfileRequestDto.jobType}</p>
              <p>
                jobApplicationCount:{' '}
                {menteeProfileRequestDto.jobApplicationCount}
              </p>
            </>
          ) : (
            <p>등록된 소개가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
}
