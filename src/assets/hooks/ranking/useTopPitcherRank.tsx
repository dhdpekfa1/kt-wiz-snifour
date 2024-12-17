import { useEffect, useState } from 'react';
import { PitcherERA, PitcherWins } from '@/features/common/types/pitchers';
import {
  getPitcherEraRanking,
  getPitcherWinRanking,
} from '@/features/game/apis/ranking/pitcher';

export function useTopPitcherRank() {
  const [eraRanking, setEraRanking] = useState<PitcherERA[]>([]);
  const [winRanking, setWinRanking] = useState<PitcherWins[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eraData, winData] = await Promise.all([
          getPitcherEraRanking(),
          getPitcherWinRanking(),
        ]);

        setEraRanking(eraData);
        setWinRanking(winData);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { eraRanking, winRanking, loading, error };
}
