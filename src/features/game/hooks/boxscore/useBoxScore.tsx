import { useEffect, useState } from 'react';
import { getMatchData } from '../../apis/boxscore/boxscore';
import { BoxscoreData } from '../../types/BoxscoreData';

const useBoxscore = (gameDate = '20241011', gmkey = '33331011KTLG0') => {
  const [boxData, setBoxData] = useState<BoxscoreData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!gameDate || !gmkey) return;
    const fetchData = async () => {
      try {
        const data = await getMatchData(gameDate, gmkey);

        setBoxData(data);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [gameDate, gmkey]);

  return { boxData, loading, error };
};

export default useBoxscore;
