import { useEffect, useState } from 'react';
import { getRecentMatches } from '../../apis/watch-point';
import { RecentMatches } from '../../types/watch-point';

const useRecentMatches = () => {
  const [recentMatchData, setRecentMatchData] = useState<RecentMatches>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecentMatches();

        setRecentMatchData(data);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { recentMatchData, loading, error };
};

export default useRecentMatches;
