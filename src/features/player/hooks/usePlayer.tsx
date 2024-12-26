import { useEffect, useState } from 'react';
import { getPlayer } from '../apis/player';
import { Player } from '../types/detail';

export const usePlayer = (
  position: string | undefined,
  pcode: string | null
) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (!position) {
    return { player: null, loading: false, error: 'position이 없습니다.' };
  }

  if (!pcode) {
    return { player: null, loading: false, error: 'pcode가 없습니다.' };
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPlayer(position, pcode);

        setPlayer(data);
      } catch (err) {
        console.error(err);
        setError('usePlayer: 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [position, pcode]);

  return { player, loading, error };
};
