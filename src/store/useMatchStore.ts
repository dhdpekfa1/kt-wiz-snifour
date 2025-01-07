import { create } from 'zustand';

interface MatchStoreState {
  currentMonth: Date; // 현재 달력에서 선택된 달
  recentMonth: string | undefined; // 최근 경기 달 (202410)
  selectedDate: Date | undefined; // 클릭한 날짜
  setCurrentMonth: (month: Date) => void; // currentMonth 업데이트 함수
  setRecentMonth: (month: string) => void; // recentMonth 업데이트 함수
  setSelectedDate: (date: Date | undefined) => void; // selectedDate 업데이트 함수
}

export const useMatchStore = create<MatchStoreState>((set) => ({
  currentMonth: new Date(),
  recentMonth: undefined,
  selectedDate: undefined,
  setCurrentMonth: (month: Date) => set(() => ({ currentMonth: month })),
  setRecentMonth: (month: string) => set(() => ({ recentMonth: month })),
  setSelectedDate: (date: Date | undefined) =>
    set(() => ({ selectedDate: date })),
}));
