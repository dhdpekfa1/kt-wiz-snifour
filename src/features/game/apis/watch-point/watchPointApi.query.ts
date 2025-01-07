import { useQuery } from '@tanstack/react-query';
import { WatchPointData } from '../../types/watch-point';
import { watchPointApi } from './watchPointApi';

// 관전포인트 쿼리 키
export const WATCH_POINT_QUERY_KEY = (gameDate: string, gmkey: string) => [
  'watchPoint',
  gameDate,
  gmkey,
];

const useGetWatchPointQuery = (gameDate: string, gmkey: string) => {
  const {
    data: watchData,
    isLoading: loading,
    error,
  } = useQuery<WatchPointData, Error>({
    queryKey: WATCH_POINT_QUERY_KEY(gameDate, gmkey),
    queryFn: () => watchPointApi.getWatchPoint(gameDate, gmkey),
    staleTime: 5 * 60 * 1000,
    enabled: !!gameDate && !!gmkey,
  });

  return { watchData, loading, error: error?.message || null };
};

export default useGetWatchPointQuery;
