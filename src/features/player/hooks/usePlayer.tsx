import { useEffect, useState } from 'react';
import { getPlayer } from '../apis/player';
import { Player } from '../types/detail';
import { getKTPitcherRanking } from '@/features/game/apis/ranking/pitcher';
import { OverallPitcherRank } from '@/features/common/types/pitchers';

export const usePlayer = (
  position: string | undefined,
  pcode: string | null
) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [maxStats, setMaxStats] = useState({});

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

    // KT 선수들의 성적 평균
    const findMaxStats = async (position: string) => {
      try {
        setLoading(true);
        if (position === 'pitcher') {
          const data: OverallPitcherRank[] = await getKTPitcherRanking();

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
            results.ipg = Math.max(
              results.ipg,
              Number(player.inn2) / Number(player.gamenum)
            );
            results.kbb = Math.max(results.kbb, Number(player.kkbb));
          }

          console.log(results);

          setMaxStats(results);
        }
      } catch (err) {
        console.error(err);
        setError('usePlayer: 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    findMaxStats(position);
  }, [position, pcode]);

  return { player, maxStats, loading, error };
};
