// store/useUserStore.ts
import { create } from 'zustand';

interface UserStore {
  uuid: string | null;
  setUuid: (uuid: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  uuid: null, // initial value
  setUuid: (uuid) => set({ uuid }), // action to set the UUID
}));

export default useUserStore;
