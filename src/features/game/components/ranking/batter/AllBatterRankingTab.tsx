import { PlayerScatterChart } from '../common/PlayerScatterChart';
import { PlayerRankingTable } from '../common/PlayerRankingTable';
import { batterColumns } from '@/constants/player-rank-colums';
import { useBatterRank } from '@/assets/hooks/ranking/useBatterRank';

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
      <PlayerRankingTable data={ranking} columns={batterColumns} />
    </div>
  );
}

export { AllBatterRankingTab };
