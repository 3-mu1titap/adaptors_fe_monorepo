import { useEffect, useState } from 'react';
import useUserStore from '../../../../store/memberUuidStore';
import {
  chatDataType,
  chatMemberDataType,
} from '../../../types/main/chatting/chattingTypes';
import FitImage from '../../../ui/image/fit-image';
import { getChatProfile } from '../../../../actions/chatting/chattingAction';

function ChatViewMessage({ message }: { message: chatDataType }) {
  const { userUuid } = useUserStore();
  const [profileInfo, setProfileInfo] = useState<chatMemberDataType>();

  const getProfileImage = async () => {
    try {
      const profile = await getChatProfile({ userUuid });
      if (profile) {
        setProfileInfo(profile);
      }
    } catch (error) {
      console.error('프로필 이미지 가져오기 실패 :', error);
    }
  };

  useEffect(() => {
    getProfileImage();
  }, []);

  const formatDate = (dateArray: number[]) => {
    let [year, month, day, hour, minute, second, millisecond] = dateArray;
    const padToTwoDigits = (num: number) => String(num).padStart(2, '0');
    return `${year}. ${padToTwoDigits(month)}. ${padToTwoDigits(day)}. ${padToTwoDigits(hour)}:${padToTwoDigits(minute)}`;
  };

  return (
    <>
      {message.messageType === 'NOTICE' ? (
        <div className={`inline-block p-2 rounded-xl bg-gray-300 text-white`}>
          {message.message}
        </div>
      ) : (
        <>
          <FitImage
            className="rounded-full w-10 h-10 mr-1 border-4 border-[#F5F5F5] overflow-hidden"
            src={
              profileInfo?.profileImageUrl
                ? profileInfo.profileImageUrl
                : '/assets/images/dummy.jpg'
            }
            alt="Profile"
          />

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
                className={`inline-block p-2 rounded-xl ${message.memberUuid === userUuid ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
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
