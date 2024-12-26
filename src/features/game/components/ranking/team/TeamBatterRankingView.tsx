import { TeamRankingBatterConfig } from '@/constants/chart-config';
import { teamBatterRankColumns } from '@/constants/columns/team-rank-colums';
import { TeamBatterRank } from '@/features/common/types/batters';
import { useTeamRank } from '@/features/game/hooks/ranking/useTeamRank';

import TeamRankingView from '../common/TeamRankingView';

function TeamBatterRankingView() {
  const { ranking, loading, error } = useTeamRank('batter');

  if (!ranking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <TeamRankingView
      tableData={ranking as TeamBatterRank[]}
      chartData={ranking as TeamBatterRank[]}
      columns={teamBatterRankColumns}
      chartConfig={TeamRankingBatterConfig}
      domain="all"
    />
  );
}

export { TeamBatterRankingView };
