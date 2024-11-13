// store/useUserStore.ts
import { create } from 'zustand';

interface UserStore {
  memberUuid: string;
  setMemberUuid: (memberUuid: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  memberUuid: '9765d9ab-2298-479c-bbf2-736f5d740588',
  setMemberUuid: (memberUuid) => set({ memberUuid }),
}));

export default useUserStore;
