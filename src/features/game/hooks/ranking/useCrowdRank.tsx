import { getCrowdRanking } from '@/features/game/apis/ranking/crowd';
import { CrowdRank } from '@/features/game/types/crowd-ranking';
import { useEffect, useState } from 'react';

export function useCrowdRank(season: string) {
  const [ranking, setRanking] = useState<CrowdRank[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCrowdRanking(season);

        setRanking(data);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [season]);

  return { ranking, loading, error };
}
