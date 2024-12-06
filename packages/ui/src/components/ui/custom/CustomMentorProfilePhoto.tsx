import CustomFitImage from './CustomFitImage';
import { CustomToolTip } from './CustomToolTip';

function CustomMentorProfilePhoto({
  profileImgUrl,
  mentorNickname,
}: {
  profileImgUrl?: string;
  mentorNickname?: string;
}) {
  const defaultProfileImgUrl =
    profileImgUrl || 'https://picsum.photos/200/200?random=320';
  const defaultMentorNickname = mentorNickname || 'mentor';
  return (
    <CustomToolTip text={defaultMentorNickname}>
      <div className="aspect-square overflow-hidden rounded-xl">
        <CustomFitImage
          src={defaultProfileImgUrl}
          alt={defaultMentorNickname}
        />
      </div>
    </CustomToolTip>
  );
}
export default CustomMentorProfilePhoto;
