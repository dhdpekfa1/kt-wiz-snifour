// import { TeamBatterRank } from '@/features/common/types/batters';
// import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';
import DataTable from '@/features/common/DataTable';
import { teamBatterRankColumns } from '@/constants/columns/team-rank-colums';
import { teamBatter as mockRanking } from '@/assets/data/__test__/mockRanking.json';

function TeamBatterRankingTable() {
  // const { ranking, loading, error } = useTeamRank('batter');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <DataTable
      data={mockRanking}
      columns={teamBatterRankColumns}
      domain="all"
    />
  );
}

export { TeamBatterRankingTable };
