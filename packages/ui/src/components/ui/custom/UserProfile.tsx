import CustomFitImage from './CustomFitImage';

function UserProfile({
  profileImgUrl,
  size,
  className,
  name,
}: {
  profileImgUrl?: string;
  size?: number;
  className?: string;
  name?: string;
}) {
  const defaultSize = size || 40;
  const defaultProfileImgUrl =
    profileImgUrl || 'https://picsum.photos/200/200?random=320';
  const defaultName = name || 'adaptor';
  return (
    <div
      className={`rounded-full bg-gray-400 overflow-hidden cursor-pointer ${className}`}
      style={{
        width: `${defaultSize}px`,
        height: `${defaultSize}px`,
      }}
    >
      <CustomFitImage
        src={defaultProfileImgUrl}
        alt="profile"
        className="object-cover"
      />
    </div>
  );
}

export default UserProfile;
