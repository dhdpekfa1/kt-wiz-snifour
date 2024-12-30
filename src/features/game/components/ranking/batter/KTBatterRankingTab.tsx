import { batterColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { useBatterRank } from '@/features/game/hooks/ranking';
import { PlayerScatterChart } from '@/features/game/components/ranking';

function KTBatterRankingTab() {
  const { ranking, loading, error } = useBatterRank('kt');

  if (!ranking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <PlayerScatterChart data={ranking} position="batter" />
      <SortableTable data={ranking} columns={batterColumns} domain="kt" />
    </div>
  );
}

export { KTBatterRankingTab };
