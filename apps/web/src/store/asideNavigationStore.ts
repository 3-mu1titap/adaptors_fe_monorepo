import { create } from 'zustand';

export interface asideNavigationStoreType {
  useNavigation: boolean;
  setUseNavigation: () => void;
}

export const useNavigation = create<asideNavigationStoreType>((set, get) => ({
  useNavigation: true,
  setUseNavigation: () => set({ useNavigation: !get().useNavigation }),
}));
