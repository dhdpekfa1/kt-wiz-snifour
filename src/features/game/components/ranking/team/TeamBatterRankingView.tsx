import { TeamRankingBatterConfig } from '@/constants/chart-config';
import { teamBatterRankColumns } from '@/constants/columns/team-rank-colums';
import { TeamBatterRank } from '@/features/common/types/batters';
import { useTeamRank } from '@/features/game/hooks/ranking/useTeamRank';

import TeamRankingView from '../common/TeamRankingView';

function TeamBatterRankingView() {
  const { ranking, isLoading, isError, error } = useTeamRank('batter');

  if (isError) {
    return <div>{error?.toString()}</div>;
  }

  if (!ranking?.length) {
    return null;
  }

  return (
    <>
      <p className="text-neutral-400">타율 비교 순위입니다.</p>
      <TeamRankingView
        tableData={ranking as TeamBatterRank[]}
        chartData={ranking as TeamBatterRank[]}
        columns={teamBatterRankColumns}
        chartConfig={TeamRankingBatterConfig}
        loading={isLoading}
        domain="all"
      />
    </>
  );
}

export { TeamBatterRankingView };
