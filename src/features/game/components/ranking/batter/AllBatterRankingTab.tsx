import { batterColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { useBatterRank } from '@/features/game/hooks/ranking';
import { useSearchParams } from 'react-router';
import Filter from '../common/Filter';
import { PlayerScatterChart } from '../common/PlayerScatterChart';

function AllBatterRankingTab() {
  const { ranking, isLoading, error, isError } = useBatterRank('all');
  const [searchParams] = useSearchParams();
  const pname = searchParams.get('pname');

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>{error?.toString()}</div>;
  }

  const filteredRanking = pname
    ? ranking?.filter((player) => player.playerName === pname)
    : ranking;

  return (
    <div className="flex flex-col">
      <PlayerScatterChart data={ranking || []} position="batter" />
      <Filter />
      <SortableTable
        data={filteredRanking || []}
        columns={batterColumns}
        domain="all"
      />
    </div>
  );
}

export { AllBatterRankingTab };
