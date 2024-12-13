import {
  PlayerRankingTable,
  PlayerScatterChart,
} from '@/features/game/components/ranking';
import { batterColumns } from '@/constants/player-rank-colums';
import { useBatterRank } from '@/assets/hooks/ranking/useBatterRank';

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
      <PlayerRankingTable data={ranking} columns={batterColumns} kt />
    </div>
  );
}

export { KTBatterRankingTab };
