'use server';

import { redirect } from 'next/navigation';
import {
  chatMemberDataType,
  prevChatResType,
} from '../../components/types/main/chatting/chattingTypes';
import { commonResType } from '../../components/types/ResponseTypes';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';
const mentoringUuid = '05b8b889-9798-4f31-88e5-f6b967cb069d';
const mentoringSessionUuid = 'ac419217-cb98-4334-8b78-8126aa0e57aa';

// 기존 채팅 데이터 불러오기
export async function getChattingData(page: number) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/pagingSearch/${mentoringSessionUuid}?limit=20&pageNumber=${page}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<prevChatResType>;
    return result.result;
  } catch (error) {
    console.error('세션의 채팅 리스트 조회 실패 : ', error);
    return redirect('/error?message=Failed to fetch session chatting');
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
        'userUuid': userUuid,
      },
      body: JSON.stringify(payload),
    });
    return;
  } catch (error) {
    console.error('채팅 요청 조회 실패 : ', error);
    // 에러 message
    return {};
  }
}

// 채팅 보낸 상대의 프로필 이름 정보 가져오기
export async function getChatProfile({ userUuid }: { userUuid: string }) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.PROFILE_URL}/api/v1/memberInfo/profileImage`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
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

// 채팅방 입장
export async function postEnterChat({
  userUuid,
  nickname,
  // mentoringSessionUuid,
}: {
  userUuid: string;
  nickname: string;
  // mentoringSessionUuid: string;
}) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/join/${mentoringSessionUuid}?nickName=${nickname}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
      }
    );
    return;
  } catch (error) {
    console.error('채팅방 입장 실패 : ', error);
    return {};
  }
}

// 채팅방 퇴장
export async function postOutChat({
  userUuid,
  nickname,
  // mentoringSessionUuid,
}: {
  userUuid: string;
  nickname: string;
  // mentoringSessionUuid: string;
}) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/leave/${mentoringSessionUuid}?nickName=${nickname}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
      }
    );
    return;
  } catch (error) {
    console.error('채팅방 퇴장장 실패 : ', error);
    return {};
  }
}
