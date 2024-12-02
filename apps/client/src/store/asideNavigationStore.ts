import { create } from 'zustand';

export interface asideNavigationStoreType {
  useNavigation: boolean;
  setUseNavigation: () => void;
}

export const useAsideNavigationStore = create<asideNavigationStoreType>(
  (set, get) => ({
    useNavigation: true,
    setUseNavigation: () => set({ useNavigation: !get().useNavigation }),
  })
);
