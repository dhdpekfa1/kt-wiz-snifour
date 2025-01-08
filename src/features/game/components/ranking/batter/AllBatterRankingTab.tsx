import { batterColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { useBatterRank } from '@/features/game/hooks/ranking';
import { PlayerScatterChart } from '../common/PlayerScatterChart';
import { useSearchParams } from 'react-router';
import Filter from '../common/Filter';

function AllBatterRankingTab() {
  const { ranking, isLoading, error, isError } = useBatterRank('all');
  const [searchParams] = useSearchParams();
  const pname = searchParams.get('pname');

  if (isError) {
    return <div>{error?.toString()}</div>;
  }

  const filteredRanking = pname
    ? ranking?.filter((player) => player.playerName === pname)
    : ranking;

  return (
    <div className="flex flex-col">
      <PlayerScatterChart
        data={ranking || []}
        position="batter"
        loading={isLoading}
      />
      <Filter />
      <SortableTable
        data={filteredRanking || []}
        columns={batterColumns}
        loading={isLoading}
        domain="all"
      />
    </div>
  );
}

export { AllBatterRankingTab };
