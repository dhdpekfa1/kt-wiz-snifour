import { create } from 'zustand';

interface MaxStatsStoreState {
  maxStats: null | { [key: string]: number };
  setMaxStats: (stats: { [key: string]: number }) => void;
}

export const useMaxStatsStore = create<MaxStatsStoreState>((set) => ({
  maxStats: null,
  setMaxStats: (stats) => set(() => ({ maxStats: stats })),
}));
