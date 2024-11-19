'use server';

import {
  chatDataType,
  chatMemberDataType,
} from '../../components/types/main/chatting/chattingTypes';
import {
  commonResListType,
  commonResType,
} from '../../components/types/ResponseTypes';

const userUuid = '671a55ae-2346-407f-85e3-9cd39f4e3d10';
const mentoringSessionUuid = 'ac419217-cb98-4334-8b78-8126aa0e57aa';

// 기존 채팅 데이터 불러오기
export async function getChattingData() {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/pagingSearch/${mentoringSessionUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResListType<chatDataType>;
    return result.result;
  } catch (error) {
    console.error('세션의 채팅 리스트 조회 실패 : ', error);
    return [];
  }
}

// 채팅 보내기
export async function postChat({
  message,
  messageType,
  mediaUrl,
}: {
  message: string;
  messageType: 'TEXT' | 'MEDIA' | 'FILE' | 'NOTICE';
  mediaUrl?: string;
}) {
  'use server';
  try {
    const payload = {
      mentoringSessionUuid: mentoringSessionUuid,
      message: message,
      messageType: messageType,
      mediaUrl: mediaUrl ? mediaUrl : '',
    };

    const res = await fetch(`${process.env.CHATSERVICE_URL}/api/v1/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Uuid': `${userUuid}`,
      },
      body: JSON.stringify(payload),
    });

    const result = (await res.json()) as commonResType<null>;
    return result.result;
  } catch (error) {
    console.error('채팅 요청 조회 실패 : ', error);
    return {};
  }
}

// 채팅 보낸 상대의 프로필 이름 정보 가져오기
export async function getChatProfile({ memberUuid }: { memberUuid: string }) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.PROFILE_URL}/api/v1/memberInfo/profileImage`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Uuid': `${memberUuid}`,
        },
      }
    );
    const result = (await res.json()) as commonResType<chatMemberDataType>;
    return result.result;
  } catch (error) {
    console.error('채팅 상대 프로필 조회 실패 : ', error);
    return { nickName: '', profileImageUrl: '' };
  }
}
