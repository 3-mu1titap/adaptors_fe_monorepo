// store/useUserStore.ts
import { create } from 'zustand';

interface UserStore {
  nickname: string;
  setNickname: (nickname: string) => void;
  userUuid: string;
  setUserUuid: (userUuid: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  nickname: '',
  setNickname: (nickname) => set({ nickname }),
  userUuid: 'e782841e-7fcd-47c5-93e7-50203b3a0a99',
  setUserUuid: (userUuid) => set({ userUuid }),
}));

export default useUserStore;
