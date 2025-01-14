import { getCheerleaderList } from '@/features/player/apis';
import type { Cheerleader } from '@/features/player/types/cheerleader';
import { useEffect, useState } from 'react';

const useCheerleaderList = () => {
  const [cheerleaderList, setCheerleaderList] = useState<Cheerleader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCheerleaderList();

        setCheerleaderList(data);
      } catch (err) {
        console.error(err);
        setError(
          'useCheerleaderList: 데이터를 가져오는 중 오류가 발생했습니다.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cheerleaderList, loading, error };
};

export default useCheerleaderList;
