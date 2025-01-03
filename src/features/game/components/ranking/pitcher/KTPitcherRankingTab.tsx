import { pitcherColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { PlayerScatterChart } from '@/features/game/components/ranking';
import { usePitcherRank } from '@/features/game/hooks/ranking/usePitcherRank';

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
      <SortableTable data={ranking} columns={pitcherColumns} domain="kt" />
    </div>
  );
}

export { KTPitcherRankingTab };
