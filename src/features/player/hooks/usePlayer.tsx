import { OverallPitcherRank } from '@/features/common/types/pitchers';
import { getKTBatterRanking } from '@/features/game/apis/ranking/batter';
import { getKTPitcherRanking } from '@/features/game/apis/ranking/pitcher';
import { usePlayerStore } from '@/store/usePlayerStore';
import { useEffect } from 'react';
import { getPlayer } from '../apis/player';

export const usePlayer = (
  position: string | undefined,
  pcode: string | null
) => {
  const {
    player,
    loading,
    error,
    setPlayer,
    setLoading,
    setError,
    setMaxStats,
  } = usePlayerStore();

  if (!position) {
    return { player: null, loading: false, error: 'position이 없습니다.' };
  }

  if (!pcode) {
    return { player: null, loading: false, error: 'pcode가 없습니다.' };
  }

  useEffect(() => {
    setPlayer(null);
    setLoading(true);
    setError(null);

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
  }, [position, pcode, setPlayer, setError, setLoading]);

  useEffect(() => {
    // KT 선수들의 성적 최대값값
    const findMaxStats = async (position: string) => {
      try {
        setLoading(true);
        let data = [];
        if (position === 'pitcher') {
          data = await getKTPitcherRanking();
        } else {
          data = await getKTBatterRanking();
        }

        const results: { [key: string]: number } = { ipg: 0, kbb: 0 };

        for (const player of data) {
          for (const key in player) {
            const value = Number(player[key as keyof OverallPitcherRank]);

            if (Number.isNaN(value)) continue;

            if (results[key] === undefined) {
              results[key] = 0;
            }

            results[key] = Math.max(results[key], value);
          }
          if (position === 'pitcher') {
            results.ipg = Math.max(
              results.ipg,
              Number(player.inn2) / Number(player.gamenum)
            );
            results.kbb = Math.max(results.kbb, Number(player.kkbb));
          }
        }

        setMaxStats(results);
      } catch (err) {
        console.error(err);
        setError('usePlayer: 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    findMaxStats(position);
  }, [position, setMaxStats, setLoading, setError]);

  return { player, loading, error };
};
