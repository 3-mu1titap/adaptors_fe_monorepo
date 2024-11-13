import { useEffect, useState } from 'react';
import useUserStore from '../../../../store/memberUuidStore';
import {
  chatDataType,
  chatMemberDataType,
} from '../../../types/main/chatting/chattingTypes';
import FitImage from '../../../ui/image/fit-image';
import { getChatProfile } from '../../../../actions/chatting/chattingAction';

function ChatViewMessage({ message }: { message: chatDataType }) {
  const { memberUuid } = useUserStore();
  const [profileInfo, setProfileInfo] = useState<chatMemberDataType>();

  const getProfileImage = async () => {
    try {
      const profile = await getChatProfile({ memberUuid });
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
    const [year, month, day, hour, minute, second, millisecond] = dateArray;

    // Date 객체 생성 (month는 0부터 시작하므로 1을 빼줌)
    const date = new Date(
      Date.UTC(year, month - 1, day, hour, minute, second, millisecond)
    );

    // 원하는 형식으로 변환
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <>
      {message.messageType === 'NOTICE' ? (
        <div className={`inline-block p-2 rounded-xl bg-gray-300 text-white`}>
          {message.message}
        </div>
      ) : (
        <>
          <div className="flex-shrink-0 w-8 h-8 mr-2">
            <FitImage
              className="rounded-full border-4 border-[#F5F5F5]"
              src={
                profileInfo?.profileImageUrl
                  ? profileInfo.profileImageUrl
                  : '/assets/images/dummy.jpg'
              }
              alt="Profile"
            />
          </div>

          <div
            className={`flex flex-col ${message.memberUuid === memberUuid ? 'items-end' : 'items-start'}`}
          >
            {message.memberUuid !== memberUuid && (
              <div
                className={`text-xs ${message.memberUuid === memberUuid ? 'text-blue-500' : 'text-gray-600'}`}
              >
                {profileInfo?.nickName}
              </div>
            )}
            <div
              className={`text-xs text-gray-500 order-1 ${message.memberUuid === memberUuid ? 'mr-auto' : 'ml-auto'}`}
            >
              {formatDate(message.createdAt)}
            </div>
            {message.messageType === 'MEDIA' ? (
              <a
                href={message.mediaUrl}
                download={message.message}
                className={`inline-block py-[2px] px-2 mt-1 rounded-full border-2 border-dashed ${message.memberUuid === memberUuid ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-300 text-gray-800 border-gray-300'}`}
              >
                📁 {message.message}
              </a>
            ) : (
              <div
                style={{ whiteSpace: 'pre-wrap' }}
                className={`inline-block p-2 rounded-xl ${message.memberUuid === memberUuid ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
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
