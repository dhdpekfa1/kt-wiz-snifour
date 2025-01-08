import { useQuery } from '@tanstack/react-query';
import { getMatchData } from '../../apis/boxscore/boxscore';

const useBoxscore = (gameDate = '20241011', gmkey = '33331011KTLG0') => {
  return useQuery({
    queryKey: ['boxscore', gameDate, gmkey],
    queryFn: () => getMatchData(gameDate, gmkey),
    enabled: !!gameDate && !!gmkey,
    staleTime: 5 * 60 * 1000, //5분
  });
};

export default useBoxscore;
