import { PlayerScatterChart } from '@/features/game/components/ranking';
import { pitcherColumns } from '@/constants/player-rank-colums';
// import { usePitcherRank } from '@/assets/hooks/ranking/usePitcherRank';
import { ktPitcher } from '@/assets/data/__test__/mockRanking.json';
import SortableTable from '@/features/common/SortableTable';

function KTPitcherRankingTab() {
  // const { ranking, loading, error } = usePitcherRank('kt');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const ranking = ktPitcher;

  return (
    <div>
      <PlayerScatterChart data={ranking} position="pitcher" />
      {/* <PlayerRankingTable data={ranking} columns={pitcherColumns} kt /> */}
      <SortableTable data={ranking} columns={pitcherColumns} domain="kt" />
    </div>
  );
}

export { KTPitcherRankingTab };
