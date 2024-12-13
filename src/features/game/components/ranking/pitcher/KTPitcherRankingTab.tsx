import {
  PlayerRankingTable,
  PlayerScatterChart,
} from '@/features/game/components/ranking';
import { pitcherColumns } from '@/constants/player-rank-colums';
import { usePitcherRank } from '@/assets/hooks/ranking/usePitcherRank';

function KTPitcherRankingTab() {
  const { ranking, loading, error } = usePitcherRank('kt');

  if (!ranking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <PlayerScatterChart data={ranking} position="pitcher" />
      <PlayerRankingTable data={ranking} columns={pitcherColumns} kt />
    </div>
  );
}

export { KTPitcherRankingTab };
