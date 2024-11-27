import { create } from 'zustand';
import {
  chatDataType,
  prevChatDataStoreType,
} from '../components/types/main/chatting/chattingTypes';

interface prevChatDataStore {
  prevChatData: prevChatDataStoreType[];
  addPrevChatData: (newChatData: prevChatDataStoreType) => void; // 새로운 데이터 추가
  updateChatData: (
    sessionUuid: string,
    updates: Partial<prevChatDataStoreType>
  ) => void; // 부분 업데이트
  addPrevMessagesToChat: (
    sessionUuid: string,
    prevMessages: chatDataType[]
  ) => void; // 이전 메시지 추가
  addMessageToChat: (sessionUuid: string, newMessage: chatDataType) => void; // 새 메시지 추가
  clearChatData: () => void; // 채팅 데이터 초기화
}

export const usePrevChatDataStore = create<prevChatDataStore>((set) => ({
  prevChatData: [],

  // 새로운 데이터 추가
  addPrevChatData: (newChatData) =>
    set((state) => {
      // 중복 체크
      if (
        state.prevChatData.find(
          (chat) => chat.sessionUuid === newChatData.sessionUuid
        )
      ) {
        return state; // 중복된 경우 상태를 변경하지 않음
      }
      return {
        prevChatData: [...state.prevChatData, newChatData],
      };
    }),

  // 부분 업데이트
  updateChatData: (sessionUuid, updates) =>
    set((state) => ({
      prevChatData: state.prevChatData.map((chatData) =>
        chatData.sessionUuid === sessionUuid
          ? { ...chatData, ...updates } // 해당 데이터만 업데이트
          : chatData
      ),
    })),

  // 이전 메시지 추가
  addPrevMessagesToChat: (sessionUuid, prevMessages) =>
    set((state) => ({
      prevChatData: state.prevChatData.map((chatData) =>
        chatData.sessionUuid === sessionUuid
          ? {
              ...chatData,
              messages: [...prevMessages, ...chatData.messages], // 이전 메시지 추가
            }
          : chatData
      ),
    })),

  // 새 메시지 추가
  addMessageToChat: (sessionUuid, newMessage) =>
    set((state) => ({
      prevChatData: state.prevChatData.map((chatData) =>
        chatData.sessionUuid === sessionUuid
          ? {
              ...chatData,
              messages: [...chatData.messages, newMessage], // 새 메시지 추가
            }
          : chatData
      ),
    })),

  // 채팅 데이터 초기화
  clearChatData: () => set({ prevChatData: [] }),
}));

interface userInfoType {
  userUuid: string;
  nickname: string;
  profileImageUrl: string;
}

interface userInfoStore {
  userInfo: userInfoType[];
  addUserInfo: (newUserInfo: userInfoType) => void;
}

export const useUserInfoStore = create<userInfoStore>((set) => ({
  userInfo: [],
  addUserInfo: (newUserInfo) =>
    set((state) => ({
      userInfo: [...state.userInfo, newUserInfo], // 기존 배열에 추가
    })),
}));
