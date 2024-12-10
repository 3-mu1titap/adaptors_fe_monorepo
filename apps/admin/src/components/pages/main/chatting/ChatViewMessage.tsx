import { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import {
  chatDataType,
  chatMemberDataType,
} from '@repo/admin/components/types/main/chatting/chattingTypes';
import useUserStore from '@repo/admin/store/memberUuidStore';
import { useUserInfoStore } from '@repo/admin/store/messagesStore';
import { getChatProfile } from '@repo/admin/actions/chatting/chattingAction';

function ChatViewMessage({ message }: { message: chatDataType }) {
  const { userUuid } = useUserStore();
  const { userInfo, addUserInfo } = useUserInfoStore();
  const [profileInfo, setProfileInfo] = useState<chatMemberDataType>();

  const getProfileImage = async () => {
    try {
      const profile = await getChatProfile({ userUuid: message.memberUuid });
      if (profile) {
        setProfileInfo(profile);
        const userInfoToAdd = {
          userUuid: message.memberUuid,
          nickname: profile.nickName,
          profileImageUrl: profile.profileImageUrl,
        };
        addUserInfo(userInfoToAdd);
      }
    } catch (error) {
      console.error('프로필 이미지 가져오기 실패 :', error);
    }
  };

  useEffect(() => {
    // 상태에서 이미 존재하는 프로필 정보를 확인
    const existingProfile = userInfo.find(
      (user) => user.userUuid === message.memberUuid
    );
    if (existingProfile) {
      setProfileInfo({
        nickName: existingProfile.nickname,
        profileImageUrl: existingProfile.profileImageUrl,
      }); // 이미 존재하면 상태에서 가져옴
    } else {
      getProfileImage(); // 존재하지 않으면 API 호출
    }
  }, []);

  const formatDate = (dateArray: number[]) => {
    let [year, month, day, hour, minute, second, millisecond] = dateArray;
    const padToTwoDigits = (num: number) => String(num).padStart(2, '0');
    return `${year}. ${padToTwoDigits(month)}. ${padToTwoDigits(day)}. ${padToTwoDigits(hour)}:${padToTwoDigits(minute)}`;
  };

  return (
    <>
      {message.messageType === 'NOTICE' ? (
        <div className={`inline-block px-2 py-1 rounded-xl text-adaptorsBlue`}>
          {message.message}
        </div>
      ) : (
        <>
          {message.memberUuid !== userUuid && (
            <Avatar>
              <AvatarImage src={profileInfo?.profileImageUrl} alt="Profile" />
              <AvatarFallback>{profileInfo?.nickName[0]}</AvatarFallback>
            </Avatar>
          )}

          <div
            className={`flex flex-col ${message.memberUuid === userUuid ? 'items-end' : 'items-start'}`}
          >
            {message.memberUuid !== userUuid && (
              <div
                className={`text-xs ${message.memberUuid === userUuid ? 'text-blue-500' : 'text-gray-600'}`}
              >
                {profileInfo?.nickName}
              </div>
            )}
            <div
              className={`text-xs text-gray-500 order-1 ${message.memberUuid === userUuid ? 'mr-auto' : 'ml-auto'}`}
            >
              {formatDate(message.createdAt)}
            </div>
            {message.messageType === 'MEDIA' ? (
              <a
                href={message.mediaUrl}
                download={message.message}
                className={`inline-block py-[2px] px-2 mt-1 rounded-full border-2 border-dashed ${message.memberUuid === userUuid ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-300 text-gray-800 border-gray-300'}`}
              >
                📁 {message.message}
              </a>
            ) : (
              <div
                style={{ whiteSpace: 'pre-wrap' }}
                className={`inline-block px-2 py-1 rounded-xl ${message.memberUuid === userUuid ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
              >
                {message.message}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ChatViewMessage;
