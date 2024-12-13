import { useEffect, useState } from 'react';

import { OverallBatterRank } from '@/features/common/types/batters';
import {
  getAllBatterRanking,
  getKTBatterRanking,
} from '@/features/game/apis/ranking';

export function useBatterRank(domain: 'kt' | 'all') {
  const [ranking, setRanking] = useState<OverallBatterRank[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          domain === 'kt'
            ? await getKTBatterRanking()
            : await getAllBatterRanking();

        setRanking(data);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [domain]);

  return { ranking, loading, error };
}
