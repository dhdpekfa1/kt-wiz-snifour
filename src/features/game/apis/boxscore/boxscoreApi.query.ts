import { useQuery } from '@tanstack/react-query';
import { boxscoreApi } from './boxscoreApi';

// 박스스코어 쿼리 키
export const BOXSCORE_QUERY_KEY = (gameDate: string, gmkey: string) => [
  'boxscore',
  gameDate,
  gmkey,
];

export const useGetBoxscoreQuery = (
  gameDate = '20241011',
  gmkey = '33331011KTLG0'
) => {
  return useQuery({
    queryKey: BOXSCORE_QUERY_KEY(gameDate, gmkey),
    queryFn: () => boxscoreApi.getMatchData(gameDate, gmkey),
    enabled: !!gameDate && !!gmkey,
    staleTime: 5 * 60 * 1000, //5분
  });
};
