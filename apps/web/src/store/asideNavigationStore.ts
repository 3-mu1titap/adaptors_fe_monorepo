import { create } from 'zustand';
export interface asideNavigationStoreType {
  isNavigation: boolean;
  setNavigation: () => void;
}

export const useNavigationStore = create<asideNavigationStoreType>(
  (set, get) => ({
    isNavigation: true,
    setNavigation: () => set({ isNavigation: !get().isNavigation }),
  })
);
