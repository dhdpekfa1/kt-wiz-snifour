import { OverallBatterRank } from '@/features/common/types/batters';
import { OverallPitcherRank } from '@/features/common/types/pitchers';

export const findMaxStats = (
  data: OverallPitcherRank[] | OverallBatterRank[],
  position: string
): {
  [key: string]: number;
} => {
  const results: { [key: string]: number } = { ipg: 0, kbb: 0 };

  if (data.length === 0) {
    return results; // 데이터가 없는 경우에도 초기값 반환
  }

  for (const player of data) {
    for (const key in player) {
      const value = Number(
        (player as OverallPitcherRank)[key as keyof OverallPitcherRank]
      );

      if (Number.isNaN(value)) continue;

      results[key] = Math.max(results[key] ?? 0, value); // undefined 방지
    }
    if (position === 'pitcher') {
      results.ipg = Math.max(
        results.ipg,
        Number((player as OverallPitcherRank).inn2) / Number(player.gamenum)
      );
      results.kbb = Math.max(
        results.kbb,
        Number((player as OverallPitcherRank).kkbb)
      );
    }
  }

  return results;
};
