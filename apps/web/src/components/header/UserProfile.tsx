import { CustomToolTip } from '@repo/ui/components/ui/custom/index';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getMyProfileImage } from 'src/actions/profile/getProfileData';
function UserProfile({ size }: { size?: number }) {
  const [profileImageUrl, setProfileImageUrl] = useState(
    'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734245082473-Frame-3.png'
  );
  const defaultSize = size || 40;
  useEffect(() => {
    // 비동기 작업을 내부에서 실행
    const fetchProfileImage = async () => {
      const data = await getMyProfileImage();
      setProfileImageUrl(data.profileImageUrl);
    };

    fetchProfileImage(); // 비동기 함수 호출
  }, []);
  return (
    <CustomToolTip text={'profile'}>
      <div
        className="rounded-full bg-gray-400 overflow-hidden ring-1 drop-shadow-md cursor-pointer"
        style={{
          width: `${defaultSize}px`,
          height: `${defaultSize}px`,
        }}
      >
        <Image
          src={profileImageUrl}
          alt="user"
          width={500}
          height={500}
          priority
        />
      </div>
    </CustomToolTip>
  );
}
export default UserProfile;
