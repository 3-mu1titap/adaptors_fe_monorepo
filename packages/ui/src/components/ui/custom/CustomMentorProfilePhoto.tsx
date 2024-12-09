import CustomFitImage from './CustomFitImage';
import { CustomToolTip } from './index';
function CustomMentorProfilePhoto({
  profileImgUrl,
  mentorNickname,
}: {
  profileImgUrl?: any;
  mentorNickname?: any;
}) {
  // const defaultProfileImgUrl =
  //   profileImgUrl || 'https://picsum.photos/200/200?random=320';
  // const defaultMentorNickname = mentorNickname || 'mentor';
  return (
    <CustomToolTip text={mentorNickname || undefined}>
      <div className="aspect-square overflow-hidden rounded-xl">
        <CustomFitImage src={profileImgUrl} alt={mentorNickname} />
      </div>
    </CustomToolTip>
  );
}
export default CustomMentorProfilePhoto;
