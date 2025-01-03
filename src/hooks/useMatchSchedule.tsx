import { CarouselApi } from '@/components/ui';
import { getMonthSchedule } from '@/features/game/apis';
import { GameSchedule } from '@/features/game/types/match-schedule';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

interface UseMatchScheduleParams {
  currentMonth: Date; // Mon Apr 01 2024 00:00:00 GMT+0900 (한국 표준시)
  maxRetries?: number;
  carouselApi?: CarouselApi | null;
}

export const useMatchSchedule = ({
  currentMonth,
  maxRetries = 12,
  carouselApi,
}: UseMatchScheduleParams) => {
  const [matchData, setMatchData] = useState<GameSchedule[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMatchSchedule = async () => {
      setIsLoading(true);
      setError(null);
      let yearMonth = format(currentMonth, 'yyyyMM');
      let retries = maxRetries;
      let allMatches: GameSchedule[] = [];

      // 이번 달에 경기가 없을 경우 가장 최신 경기 확인
      try {
        while (retries > 0) {
          const data: GameSchedule[] = await getMonthSchedule(yearMonth);

          if (data.length) {
            allMatches = [...allMatches, ...data];
            break; // 데이터가 있으면 반복 중지
          }

          // 이전 달로 이동 최대 12번 호출
          const currentDate = new Date(
            parseInt(yearMonth.slice(0, 4)),
            parseInt(yearMonth.slice(4, 6)) - 1,
            1
          );
          currentDate.setMonth(currentDate.getMonth() - 1);
          yearMonth = format(currentDate, 'yyyyMM');
          retries -= 1;
        }

        // 가장 마지막 경기로 이동
        if (carouselApi && allMatches.length > 0) {
          carouselApi.scrollTo(allMatches.length - 1, true); // 마지막 경기 인덱스로 이동
        }
        setMatchData(allMatches);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatchSchedule();
  }, [currentMonth, maxRetries, carouselApi]);

  return { matchData, isLoading, error };
};
