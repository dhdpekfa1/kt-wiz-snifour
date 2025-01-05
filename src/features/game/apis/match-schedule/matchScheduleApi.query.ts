import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { CarouselApi } from '@/components/ui';
import { GameSchedule } from '@/features/game/types/match-schedule';
import { scheduleApi } from './matchScheduleApi';

interface UseMatchScheduleQueryParams {
  currentMonth: Date;
  carouselApi?: CarouselApi | null;
  type?: 'kt' | 'all';
}

// 경기 일정 쿼리 키
export const MATCH_SCHEDULE_QUERY_KEY = {
  GET_SCHEDULE: (yearMonth: string) => ['matchSchedule', yearMonth],
};

// 경기 일정
export const useGetMatchScheduleQuery = ({
  currentMonth,
  carouselApi,
  type = 'kt',
}: UseMatchScheduleQueryParams) => {
  const queryClient = useQueryClient();

  const yearMonth = format(currentMonth, 'yyyyMM');
  const prevMonth = new Date(currentMonth);
  prevMonth.setMonth(prevMonth.getMonth() - 1);
  const nextMonth = new Date(currentMonth);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  // 호출할 함수 선택
  const fetchFn =
    type === 'kt'
      ? async (yearMonth: string): Promise<GameSchedule[]> => {
          const response = await scheduleApi.getMonthSchedule(yearMonth);
          return response.data.list;
        }
      : async (yearMonth: string): Promise<GameSchedule[]> => {
          const response = await scheduleApi.getAllMonthSchedule(yearMonth);
          return response.data.list;
        };
  // 현재 달 데이터 가져오기
  const {
    data: currentData = [],
    isLoading,
    error,
  } = useQuery<GameSchedule[], Error>({
    queryKey: MATCH_SCHEDULE_QUERY_KEY.GET_SCHEDULE(`${type}-${yearMonth}`),
    queryFn: () => fetchFn(yearMonth),
    staleTime: 5 * 60 * 1000,
  });

  // 현재 달 첫 번째 경기로 이동
  useEffect(() => {
    if (carouselApi && currentData.length > 0) {
      carouselApi.scrollTo(0, true);
    }
  }, [carouselApi, currentData]);

  // 이전, 다음 달 데이터 프리패칭
  useEffect(() => {
    const prevKey = MATCH_SCHEDULE_QUERY_KEY.GET_SCHEDULE(
      `${type}-${format(prevMonth, 'yyyyMM')}`
    );
    const nextKey = MATCH_SCHEDULE_QUERY_KEY.GET_SCHEDULE(
      `${type}-${format(nextMonth, 'yyyyMM')}`
    );

    queryClient.prefetchQuery({
      queryKey: prevKey,
      queryFn: () => fetchFn(format(prevMonth, 'yyyyMM')),
    });
    queryClient.prefetchQuery({
      queryKey: nextKey,
      queryFn: () => fetchFn(format(nextMonth, 'yyyyMM')),
    });
  }, [queryClient, prevMonth, nextMonth, type, fetchFn]);

  return { matchData: currentData, isLoading, error };
};
