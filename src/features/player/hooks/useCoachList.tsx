import { getCoachList } from '@/features/player/apis';
import { Coach } from '@/features/player/types/player';
import { useEffect, useState } from 'react';

const useCoachList = () => {
  const [coachList, setCoachList] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCoachList();

        setCoachList(data);
      } catch (err) {
        console.error(err);
        setError('useCoachList: 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { coachList, loading, error };
};

export default useCoachList;
