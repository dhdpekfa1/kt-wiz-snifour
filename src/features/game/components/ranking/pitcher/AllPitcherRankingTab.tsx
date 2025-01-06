import { pitcherColumns } from '@/constants/columns/player-rank-colums';
import SortableTable from '@/features/common/SortableTable';
import { PlayerScatterChart } from '@/features/game/components/ranking';
import { usePitcherRank } from '@/features/game/hooks/ranking/usePitcherRank';
import { useSearchParams } from 'react-router';
import Filter from '../common/Filter';

function AllPitcherRankingTab() {
  const { ranking, isLoading, error, isError } = usePitcherRank('all');
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
      <PlayerScatterChart data={ranking || []} position="pitcher" />
      <Filter />
      <SortableTable
        data={filteredRanking || []}
        columns={pitcherColumns}
        domain="all"
      />
    </div>
  );
}

export { AllPitcherRankingTab };
