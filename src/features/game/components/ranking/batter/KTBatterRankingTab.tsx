import { batterColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { PlayerScatterChart } from '@/features/game/components/ranking';
import { useBatterRank } from '@/features/game/hooks/ranking';
import { useSearchParams } from 'react-router';
import Filter from '../common/Filter';

function KTBatterRankingTab() {
  const { ranking, isLoading, isError, error } = useBatterRank('kt');
  const [searchParams] = useSearchParams();
  const pname = searchParams.get('pname');

  if (isError) {
    return <div>{error?.toString()}</div>;
  }

  const filteredRanking = pname
    ? ranking?.filter((player) => player.playerName === pname)
    : ranking;

  return (
    <div>
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
        domain="kt"
      />
    </div>
  );
}

export { KTBatterRankingTab };
