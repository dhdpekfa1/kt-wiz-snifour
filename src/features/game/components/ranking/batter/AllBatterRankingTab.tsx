import { PlayerScatterChart } from '../common/PlayerScatterChart';
import { batterColumns } from '@/constants/player-rank-colums';
// import { useBatterRank } from '@/assets/hooks/ranking/useBatterRank';
import { allBatter } from '@/assets/data/__test__/mockRanking.json';
import SortableTable from '@/features/common/SortableTable';

function AllBatterRankingTab() {
  // const { ranking, loading, error } = useBatterRank('all');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const ranking = allBatter;

  return (
    <div className="flex flex-col">
      <PlayerScatterChart data={ranking} position="batter" />
      <SortableTable data={ranking} columns={batterColumns} domain="all" />
    </div>
  );
}

export { AllBatterRankingTab };
