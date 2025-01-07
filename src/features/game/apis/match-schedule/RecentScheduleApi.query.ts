import { useQuery } from '@tanstack/react-query';
import { scheduleApi } from './matchScheduleApi';
import { useMatchStore } from '@/store/useMatchStore';
import { RecentGameScheduleResponse } from '../../types/match-schedule';

// 최근 경기 쿼리 키
export const RECENT_MATCHES_QUERY_KEY = ['recentMatches'];

const useGetRecentMatchScheduleQuery = () => {
  const { setRecentMonth } = useMatchStore();

  const fetchFn = async () => {
    const response = await scheduleApi.getRecentSchedule();
    // 데이터를 성공적으로 가져온 경우 상태 업데이트
    if (response?.data?.current.gameDate) {
      const yearMonth = String(response.data.current.gameDate).slice(0, 6);
      setRecentMonth(yearMonth);
    }
    return response;
  };

  const {
    data: recentMatchData,
    isLoading,
    error,
  } = useQuery<RecentGameScheduleResponse, Error>({
    queryKey: RECENT_MATCHES_QUERY_KEY,
    queryFn: fetchFn,
    staleTime: 30 * 60 * 1000,
    retry: 2,
  });

  return {
    recentMatchData,
    loading: isLoading,
    error: error?.message || null,
  };
};

export default useGetRecentMatchScheduleQuery;
