import { create } from 'zustand';

interface MatchStoreState {
  currentMonth: Date; // 현재 달력에서 선택된 달
  selectedDate: Date | undefined; // 클릭한 날짜
  setCurrentMonth: (month: Date) => void; // currentMonth 업데이트 함수
  setSelectedDate: (date: Date | undefined) => void; // selectedDate 업데이트 함수
}

export const useMatchStore = create<MatchStoreState>((set) => ({
  currentMonth: new Date(),
  selectedDate: undefined,
  setCurrentMonth: (month: Date) => set(() => ({ currentMonth: month })),
  setSelectedDate: (date: Date | undefined) =>
    set(() => ({ selectedDate: date })),
}));
