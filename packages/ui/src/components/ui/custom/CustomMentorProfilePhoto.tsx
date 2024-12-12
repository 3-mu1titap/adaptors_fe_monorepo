import CustomFitImage from './CustomFitImage';
import { CustomToolTip } from './index';
function CustomMentorProfilePhoto({
  profileImgUrl,
  mentorNickname,
}: {
  profileImgUrl?: any;
  mentorNickname?: string;
}) {
  const defaultProfileImgUrl =
    profileImgUrl || 'https://picsum.photos/200/200?random=320';
  return (
    <CustomToolTip text={mentorNickname || 'mentor'}>
      <div className="aspect-square overflow-hidden rounded-xl w-[80%] sm:w-full mx-auto">
        <CustomFitImage
          src={profileImgUrl}
          alt={defaultProfileImgUrl}
          className="mx-auto"
        />
      </div>
    </CustomToolTip>
  );
}
export default CustomMentorProfilePhoto;
