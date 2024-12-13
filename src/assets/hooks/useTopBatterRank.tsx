import { useEffect, useState } from 'react';
import { BatterHR, BatterHra } from '@/features/common/types/batters';
import {
  getBatterHraRanking,
  getBatterHrRanking,
} from '@/features/game/apis/ranking';

export function useTopBatterRank() {
  const [hraRanking, setHraRanking] = useState<BatterHra[]>([]);
  const [hrRanking, setHrRanking] = useState<BatterHR[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hraData, hrData] = await Promise.all([
          getBatterHraRanking(),
          getBatterHrRanking(),
        ]);

        setHraRanking(hraData);
        setHrRanking(hrData);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { hraRanking, hrRanking, loading, error };
}
