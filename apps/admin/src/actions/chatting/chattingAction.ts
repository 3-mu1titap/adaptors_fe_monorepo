'use server';

import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import {
  chatMemberDataType,
  prevChatResType,
  userMessageCustomDataType,
  userMessageDataType,
} from '@repo/admin/components/types/main/chatting/chattingTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

// 기존 채팅 데이터 불러오기
export async function getChattingData({
  page,
  mentoringSessionUuid,
}: {
  page: number;
  mentoringSessionUuid: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.CHATSERVICE_URL}/api/v1/chat/pagingSearch/${mentoringSessionUuid}?limit=20&pageNumber=${page}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );
  console.log(res);
  if (!res.ok) {
    console.error('세션의 채팅 리스트 조회 실패');
    return redirect('/error?message=Failed to fetch session chatting');
  }

  const result = (await res.json()) as commonResType<prevChatResType>;
  return result.result;
}

// 채팅 보내기
export async function postChat({
  message,
  messageType,
  mediaUrl,
  mentoringSessionUuid,
}: {
  message: string;
  messageType: 'TEXT' | 'MEDIA' | 'FILE' | 'NOTICE';
  mediaUrl?: string;
  mentoringSessionUuid: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

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
      'Authorization': `Bearer ${accessToken}`,
      'userUuid': userUuid,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error('채팅 요청 조회 실패');
    return false;
  }

  return true; // 성공적으로 요청을 보낸 경우
}

// 채팅 보낸 상대의 프로필 이름 정보 가져오기
export async function getChatProfile({ userUuid }: { userUuid: string }) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;

  const res = await fetch(
    `${process.env.PROFILE_URL}/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );
  if (!res.ok) {
    console.error('채팅 상대 프로필 조회 실패');
    return { nickName: '', profileImageUrl: '' };
  }

  const result = (await res.json()) as commonResType<chatMemberDataType>;
  return result.result;
}

// 채팅방 입장
export async function postEnterChat({
  nickname,
  mentoringSessionUuid,
}: {
  nickname: string;
  mentoringSessionUuid: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.CHATSERVICE_URL}/api/v1/chat/join/${mentoringSessionUuid}?nickName=${nickname}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('채팅방 입장 실패');
    return false;
  }

  return true; // 성공적으로 입장한 경우
}

// 채팅방 퇴장
export async function postOutChat({
  nickname,
  mentoringSessionUuid,
}: {
  nickname: string;
  mentoringSessionUuid: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.CHATSERVICE_URL}/api/v1/chat/leave/${mentoringSessionUuid}?nickName=${nickname}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('채팅방 퇴장 실패');
    return false;
  }

  return true; // 성공적으로 퇴장한 경우
}

// 채팅방리스트 불러오기
export async function getChattingList() {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.CHAT_QUERY_URL}/api/v1/chat-query-service`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );
  console.log('채팅방리스트--------------------------', res);
  if (!res.ok) {
    console.error('세션의 채팅 리스트 조회 실패');
  }

  const result = (await res.json()) as commonResType<userMessageDataType[]>;

  if (result.result) {
    const customChatList: userMessageCustomDataType[] = await Promise.all(
      result.result.map(async (room) => {
        const userData = await getChatProfile({
          userUuid: room.chatRequestDto.memberUuid,
        });

        return {
          id: room.id,
          chatRequestDto: {
            userUuid: room.chatRequestDto.memberUuid,
            nickname: userData.nickName,
            profileImageUrl: userData.profileImageUrl,
            message: room.chatRequestDto.message,
            sendAt: room.chatRequestDto.sentAt,
          },
          mentoringRequestDto: { ...room.mentoringRequestDto },
        } as userMessageCustomDataType;
      })
    );

    return customChatList;
  }
  return null;
}
