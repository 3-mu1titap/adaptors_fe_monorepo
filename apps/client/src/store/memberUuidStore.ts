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
  userUuid: 'c120841a-7dd0-4967-a7a8-ed1daf2544d8',
  setUserUuid: (userUuid) => set({ userUuid }),
}));

export default useUserStore;
