import { CarouselApi } from '@/components/ui';
import { getMonthSchedule } from '@/features/game/apis';
import { GameSchedule } from '@/features/game/types/match-schedule';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

interface UseMatchScheduleParams {
  currentMonth: Date; // Mon Apr 01 2024 00:00:00 GMT+0900 (한국 표준시)
  carouselApi?: CarouselApi | null;
}

// TODO: 리액트 쿼리 프리패치 사용
export const useMatchSchedule = ({
  currentMonth,
  carouselApi,
}: UseMatchScheduleParams) => {
  const [matchData, setMatchData] = useState<GameSchedule[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMatchSchedule = async () => {
      setIsLoading(true);
      setError(null);
      const yearMonth = format(currentMonth, 'yyyyMM');
      let allMatches: GameSchedule[] = [];

      // 이번 달에 경기가 없을 경우 가장 최신 경기 확인
      try {
        // 현재 달 데이터 가져오기
        const currentData: GameSchedule[] = await getMonthSchedule(yearMonth);
        allMatches = [...currentData];

        // 이전 달 데이터 가져오기
        const prevMonth = new Date(currentMonth);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        const prevData: GameSchedule[] = await getMonthSchedule(
          format(prevMonth, 'yyyyMM')
        );
        allMatches = [...prevData, ...allMatches];

        // 다음 달 데이터 가져오기
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const nextData: GameSchedule[] = await getMonthSchedule(
          format(nextMonth, 'yyyyMM')
        );
        allMatches = [...allMatches, ...nextData];

        setMatchData(allMatches);

        // 현재 달 데이터에서 첫 번째 경기로 이동
        if (carouselApi && currentData.length > 0) {
          const firstGameIndex = prevData.length; // 이전 달 데이터 개수만큼 이동
          carouselApi.scrollTo(firstGameIndex, true);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatchSchedule();
  }, [currentMonth, carouselApi]);

  return { matchData, isLoading, error };
};
