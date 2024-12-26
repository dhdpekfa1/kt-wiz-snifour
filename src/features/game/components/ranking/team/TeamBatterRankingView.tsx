import { teamBatter as mockRanking } from '@/assets/data/__test__/mockRanking.json';
import mockBatterData from '@/assets/data/__test__/season-team-rank/seasonBatter.json';
import { TeamRankingBatterConfig } from '@/constants/chart-config';
import { teamBatterRankColumns } from '@/constants/columns/team-rank-colums';
// import { TeamBatterRank } from '@/features/common/types/batters';
// import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';

import TeamRankingView from '../common/TeamRankingView';

function TeamBatterRankingView() {
  // const { ranking, loading, error } = useTeamRank('batter');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <TeamRankingView
      tableData={mockRanking}
      chartData={mockBatterData.data.list}
      columns={teamBatterRankColumns}
      chartConfig={TeamRankingBatterConfig}
      domain="all"
    />
  );
}

export { TeamBatterRankingView };
