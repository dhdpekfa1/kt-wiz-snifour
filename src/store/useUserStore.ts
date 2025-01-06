import { create } from 'zustand';

interface UserStoreState {
  email: string | null;
  nickname: string | null;
  sub: string | null; // uid
  setEmail: (email: string | null) => void;
  setNickname: (nickname: string | null) => void;
  setSub: (uid: string | null) => void;
  resetUser: () => void; // 사용자 상태 초기화
}

export const useUserStore = create<UserStoreState>((set) => ({
  email: null,
  nickname: null,
  sub: null,
  setEmail: (email) => set(() => ({ email: email })),
  setNickname: (nickname) => set(() => ({ nickname: nickname })),
  setSub: (uid) => set(() => ({ sub: uid })),
  resetUser: () =>
    set(() => ({
      email: null,
      nickname: null,
      sub: null,
    })),
}));
