// store/useUserStore.ts
import { create } from 'zustand';

interface UserStore {
  nickname: string;
  setNickname: (nickname: string) => void;
  userUuid: string;
  setUserUuid: (userUuid: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  nickname: '멘토',
  setNickname: (nickname) => set({ nickname }),
  userUuid: 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb',
  setUserUuid: (userUuid) => set({ userUuid }),
}));

export default useUserStore;
