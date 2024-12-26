// import { TeamPitcherRank } from '@/features/common/types/pitchers';
// import { useTeamRank } from "@/features/game/hooks/ranking/useTeamRank";
import { teamPitcher as mockRanking } from '@/assets/data/__test__/mockRanking.json';
import mockPitcherData from '@/assets/data/__test__/season-team-rank/seasonPitcher.json';
import { TeamRankingPitcherConfig } from '@/constants/chart-config';
import { teamPitcherRankColumns } from '@/constants/columns/team-rank-colums';
import TeamRankingView from '../common/TeamRankingView';

function TeamPitcherRankingView() {
  // const { ranking, loading, error } = useTeamRank('pitcher');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <TeamRankingView
      tableData={mockRanking}
      chartData={mockPitcherData.data.list}
      columns={teamPitcherRankColumns}
      chartConfig={TeamRankingPitcherConfig}
      domain="all"
    />
  );
}

export { TeamPitcherRankingView };
