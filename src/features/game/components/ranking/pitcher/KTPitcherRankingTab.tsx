import { pitcherColumns } from '@/constants/columns/player-rank-colums';
import { SortableTable } from '@/features/common';
import { Filter, PlayerScatterChart } from '@/features/game';
import { usePitcherRank } from '@/features/game/hooks/ranking/usePitcherRank';
import { useSearchParams } from 'react-router';

function KTPitcherRankingTab() {
  const { ranking, isLoading, error, isError } = usePitcherRank('kt');
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
        position="pitcher"
        loading={isLoading}
      />
      <Filter />
      <SortableTable
        data={filteredRanking || []}
        columns={pitcherColumns}
        loading={isLoading}
        domain="kt"
      />
    </div>
  );
}

export { KTPitcherRankingTab };
