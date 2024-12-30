import { TeamBatterRank } from '@/features/common/types/batters';
import { TeamPitcherRank } from '@/features/common/types/pitchers';
import {
  getTeamBattingRanking,
  getTeamPitchingRanking,
  getTeamRanking,
} from '@/features/game/apis/ranking/team';
import { TeamStats } from '@/features/game/types/team-ranking';
import { useEffect, useState } from 'react';

export function useTeamRank(type: 'team' | 'pitcher' | 'batter') {
  const [ranking, setRanking] = useState<
    TeamStats[] | TeamPitcherRank[] | TeamBatterRank[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = null;
        if (type === 'team') {
          data = await getTeamRanking();
        }
        if (type === 'pitcher') {
          data = await getTeamPitchingRanking();
        }
        if (type === 'batter') {
          data = await getTeamBattingRanking();
        }
        setRanking(data);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return { ranking, loading, error };
}
