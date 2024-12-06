import FitImage from './CustomFitImage';
function CustomMentorProfile({
  profileImageUrl,
  nickName,
  mentorUuid,
}: {
  profileImageUrl: string;
  nickName: string;
  mentorUuid: string;
}) {
  return (
    <div className="space-y-4">
      <FitImage
        src={profileImageUrl}
        alt="Profile"
        className="object-cover p-2"
      />
    </div>
  );
}
export default CustomMentorProfile;
