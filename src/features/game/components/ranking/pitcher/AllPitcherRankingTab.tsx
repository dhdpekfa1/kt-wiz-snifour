import { allPitcher } from '@/assets/data/__test__/mockRanking.json';
import { pitcherColumns } from '@/constants/columns/player-rank-colums';
// import { usePitcherRank } from '@/assets/hooks/ranking/usePitcherRank';
import SortableTable from '@/features/common/SortableTable';
import { PlayerScatterChart } from '@/features/game/components/ranking';

function AllPitcherRankingTab() {
  // const { ranking, loading, error } = usePitcherRank('all');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }
  const ranking = allPitcher;

  return (
    <div className="flex flex-col">
      <PlayerScatterChart data={ranking} position="pitcher" />
      {/* <PlayerRankingTable data={ranking} columns={pitcherColumns} /> */}
      <SortableTable data={ranking} columns={pitcherColumns} domain="all" />
    </div>
  );
}

export { AllPitcherRankingTab };
