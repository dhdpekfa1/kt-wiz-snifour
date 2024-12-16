import { teamPitcherRankColumns } from '@/constants/team-rank-colums';
import DataTable from '@/features/common/DataTable';
// import { TeamPitcherRank } from '@/features/common/types/pitchers';
// import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';
import { teamPitcher as mockRanking } from '@/assets/data/__test__/mockRanking.json';

function TeamPitcherRankingTable() {
  // const { ranking, loading, error } = useTeamRank('pitcher');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <DataTable
      data={mockRanking}
      columns={teamPitcherRankColumns}
      domain="all"
    />
  );
}

export { TeamPitcherRankingTable };
