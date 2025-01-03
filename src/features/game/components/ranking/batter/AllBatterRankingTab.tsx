import { batterColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { useBatterRank } from '@/features/game/hooks/ranking';
import { PlayerScatterChart } from '../common/PlayerScatterChart';

function AllBatterRankingTab() {
  const { ranking, loading, error } = useBatterRank('all');

  if (!ranking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col">
      <PlayerScatterChart data={ranking} position="batter" />
      <SortableTable data={ranking} columns={batterColumns} domain="all" />
    </div>
  );
}

export { AllBatterRankingTab };
