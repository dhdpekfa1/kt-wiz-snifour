import { Player } from '@/features/player/types/detail';
import { create } from 'zustand';

interface PlayerStoreState {
  player: Player | null;
  setPlayer: (data: Player) => void;
}

export const usePlayerStore = create<PlayerStoreState>((set) => ({
  player: null,
  setPlayer: (data) => set(() => ({ player: data })),
}));
