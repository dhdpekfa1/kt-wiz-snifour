import { create } from 'zustand';

interface MatchStoreState {
  currentMonth: Date; // 현재 달력에서 선택된 달
  recentMonth: Date | undefined; // 최근 경기 날짜
  selectedDate: Date | undefined; // 클릭한 날짜
  setCurrentMonth: (month: Date) => void; // currentMonth 업데이트 함수
  setRecentMonth: (month: Date | undefined) => void; // recentMonth 업데이트 함수
  setSelectedDate: (date: Date | undefined) => void; // selectedDate 업데이트 함수
}

export const useMatchStore = create<MatchStoreState>((set) => ({
  currentMonth: new Date(),
  recentMonth: undefined,
  selectedDate: undefined,
  setCurrentMonth: (month: Date) => set(() => ({ currentMonth: month })),
  setRecentMonth: (month: Date | undefined) =>
    set(() => ({ recentMonth: month })),
  setSelectedDate: (date: Date | undefined) =>
    set(() => ({ selectedDate: date })),
}));
