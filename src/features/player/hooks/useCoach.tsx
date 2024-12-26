import { getCoach } from '@/features/player/apis';
import { Coach } from '@/features/player/types/list';
import { useEffect, useState } from 'react';

const useCoach = (pcode: string | null) => {
  const [coachData, setCoachData] = useState<Coach>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pcode) return;
    const fetchData = async () => {
      try {
        const data = await getCoach(pcode);

        setCoachData(data);
      } catch (err) {
        console.error(err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pcode]);

  return { coachData, loading, error };
};

export default useCoach;
