// store/useUserStore.ts
import { create } from 'zustand';

interface UserStore {
  uuid: string;
  setUuid: (uuid: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  uuid: '', // initial value
  setUuid: (uuid) => set({ uuid }), // action to set the UUID
}));

export default useUserStore;
