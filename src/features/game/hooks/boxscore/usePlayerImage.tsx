import { useQuery } from '@tanstack/react-query';
import { getPlayerImage } from '../../apis/boxscore/player-image';

export function usePlayerImage(team: string, name: string) {
  return useQuery({
    queryKey: ['playerImage', team, name],
    queryFn: () => getPlayerImage(team, name),
    staleTime: 5 * 60 * 1000, //5분
  });
}
