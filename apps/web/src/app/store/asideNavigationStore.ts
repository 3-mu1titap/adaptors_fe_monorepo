import { create } from 'zustand';

export interface asideNavigationStoreType {
  useNavigaion: boolean;
  setUseNavigaion: () => void;
}

export const useNavigation = create<asideNavigationStoreType>((set, get) => ({
  useNavigation: true,
  setUseNavigation: () => set({ useNavigation: !get().useNavigaion }),
}));
