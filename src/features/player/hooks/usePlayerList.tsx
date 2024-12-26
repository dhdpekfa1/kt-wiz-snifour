import { useEffect, useState } from 'react';
import { getPlayerList } from '../apis/player';
import { Player } from '../types/list';

export const usePlayerList = (position: string) => {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPlayerList(position);

        setPlayerList(data);
      } catch (err) {
        console.error(err);
        setError('usePlayerList: 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [position]);

  return { playerList, loading, error };
};
