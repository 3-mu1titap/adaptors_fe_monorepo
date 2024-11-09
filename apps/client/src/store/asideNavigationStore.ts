import { create } from 'zustand';

export interface asideNavigationStoreType {
  useNavigation: boolean;
  // selected: string;
  // setSelected: (select: string) => void;
  setUseNavigation: () => void;
}

export const useAsideNavigationStore = create<asideNavigationStoreType>(
  (set, get) => ({
    useNavigation: true,
    // selected: '',
    // setSelected: (select: string) => set({ selected: select }),
    setUseNavigation: () => set({ useNavigation: !get().useNavigation }),
  })
);
