import { Player } from '@/features/player/types/detail';
import { create } from 'zustand';

interface PlayerStoreState {
  player: Player | null;
  loading: boolean;
  error: string | null;
  setPlayer: (data: Player) => void;
  setLoading: (status: boolean) => void;
  setError: (error: string) => void;
}

export const usePlayerStore = create<PlayerStoreState>((set) => ({
  player: null,
  loading: true,
  error: null,
  setPlayer: (data) => set(() => ({ player: data })),
  setLoading: (status) => set(() => ({ loading: status })),
  setError: (msg) => set(() => ({ error: msg })),
}));
