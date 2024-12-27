import { useEffect, useState } from 'react';
import { getWatchPoint } from '../../apis';
import { WatchPointData } from '../../types/watch-point';

const useWatchPoint = (gameDate: string, gmkey: string) => {
  const [watchData, setWatchData] = useState<WatchPointData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!gameDate || !gmkey) return;
    const fetchData = async () => {
      try {
        const data = await getWatchPoint(gameDate, gmkey);

        setWatchData(data);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gameDate, gmkey]);

  return { watchData, loading, error };
};

export default useWatchPoint;
