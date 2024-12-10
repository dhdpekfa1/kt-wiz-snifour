import { create } from 'zustand';

interface MatchStoreState {
  currentMonth: Date;
  setCurrentMonth: (month: Date) => void;
}

export const useMatchStore = create<MatchStoreState>((set) => ({
  currentMonth: new Date(),
  setCurrentMonth: (month: Date) =>
    set(() => ({
      currentMonth: month,
    })),
}));
