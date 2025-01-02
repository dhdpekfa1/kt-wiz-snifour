import { pitcherColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { PlayerScatterChart } from '@/features/game/components/ranking';
import { usePitcherRank } from '@/features/game/hooks/ranking/usePitcherRank';

function AllPitcherRankingTab() {
  const { ranking, loading, error } = usePitcherRank('all');

  if (!ranking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col">
      <PlayerScatterChart data={ranking} position="pitcher" />
      <SortableTable data={ranking} columns={pitcherColumns} domain="all" />
    </div>
  );
}

export { AllPitcherRankingTab };
