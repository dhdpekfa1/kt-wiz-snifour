import { OverallPitcherRank } from '@/features/common/types/pitchers';
import { usePlayerStore } from '@/store/usePlayerStore';
import { useEffect } from 'react';
import { getPlayer } from '../apis/player';
import { rankingApi } from '@/features/game/apis/ranking/rankingApi';
import { OverallBatterRank } from '@/features/common/types/batters';

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
        let data: OverallPitcherRank[] | OverallBatterRank[] = [];
        if (position === 'pitcher') {
          const result = await rankingApi.getKTPitcherRanking({
            gyear: '2024',
            pname: '',
            sortKey: 'ERA',
          });
          data = result.data.list || [];
        } else {
          const result = await rankingApi.getKTBatterRanking({
            gyear: '2024',
            pname: '',
            sortKey: 'HRA',
          });
          data = result.data.list || [];
        }

        const results: { [key: string]: number } = { ipg: 0, kbb: 0 };

        for (const player of data) {
          for (const key in player) {
            const value = Number(
              (player as OverallPitcherRank)[key as keyof OverallPitcherRank]
            );

            if (Number.isNaN(value)) continue;

            if (results[key] === undefined) {
              results[key] = 0;
            }

            results[key] = Math.max(results[key], value);
          }
          if (position === 'pitcher') {
            results.ipg = Math.max(
              results.ipg,
              Number((player as OverallPitcherRank).inn2) /
                Number(player.gamenum)
            );
            results.kbb = Math.max(
              results.kbb,
              Number((player as OverallPitcherRank).kkbb)
            );
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
