import { TeamRankingPitcherConfig } from '@/constants/chart-config';
import { teamPitcherRankColumns } from '@/constants/columns/team-rank-colums';
import { TeamPitcherRank } from '@/features/common/types/pitchers';
import { useTeamRank } from '@/features/game/hooks/ranking/useTeamRank';
import TeamRankingView from '../common/TeamRankingView';

function TeamPitcherRankingView() {
  const { ranking, loading, error } = useTeamRank('pitcher');

  if (!ranking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log('ranking', ranking);

  return (
    <TeamRankingView
      tableData={ranking as TeamPitcherRank[]}
      chartData={ranking as TeamPitcherRank[]}
      columns={teamPitcherRankColumns}
      chartConfig={TeamRankingPitcherConfig}
      domain="kt"
    />
  );
}

export { TeamPitcherRankingView };
