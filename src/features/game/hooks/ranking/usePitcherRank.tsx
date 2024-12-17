import { useEffect, useState } from 'react';

import { OverallPitcherRank } from '@/features/common/types/pitchers';
import {
  getAllPitcherRanking,
  getKTPitcherRanking,
} from '@/features/game/apis/ranking/pitcher';

export function usePitcherRank(domain: 'kt' | 'all') {
  const [ranking, setRanking] = useState<OverallPitcherRank[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          domain === 'kt'
            ? await getKTPitcherRanking()
            : await getAllPitcherRanking();

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
