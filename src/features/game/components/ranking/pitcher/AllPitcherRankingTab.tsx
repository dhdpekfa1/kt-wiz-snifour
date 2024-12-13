import {
  PlayerRankingTable,
  PlayerScatterChart,
} from '@/features/game/components/ranking';
import { pitcherColumns } from '@/constants/player-rank-colums';
import { usePitcherRank } from '@/assets/hooks/ranking/usePitcherRank';

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
      <PlayerRankingTable data={ranking} columns={pitcherColumns} />
    </div>
  );
}

export { AllPitcherRankingTab };
