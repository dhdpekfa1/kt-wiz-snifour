import { Player } from '@/features/player/types/detail';
import { create } from 'zustand';

interface PlayerStoreState {
  player: Player | null;
  loading: boolean;
  error: string | null;
  maxStats: null | { [key: string]: number };
  setPlayer: (data: Player) => void;
  setLoading: (status: boolean) => void;
  setError: (error: string) => void;
  setMaxStats: (stats: { [key: string]: number }) => void;
}

export const usePlayerStore = create<PlayerStoreState>((set) => ({
  player: null,
  loading: true,
  error: null,
  maxStats: null,
  setPlayer: (data) => set(() => ({ player: data })),
  setLoading: (status) => set(() => ({ loading: status })),
  setError: (msg) => set(() => ({ error: msg })),
  setMaxStats: (stats) => set(() => ({ maxStats: stats })),
}));
