import { TeamRankingPitcherConfig } from '@/constants/chart-config';
import { teamPitcherRankColumns } from '@/constants/columns/team-rank-colums';
import { TeamPitcherRank } from '@/features/common/types/pitchers';
import { useTeamRank } from '@/features/game/hooks/ranking/useTeamRank';
import TeamRankingView from '../common/TeamRankingView';

function TeamPitcherRankingView() {
  const { ranking, isLoading, isError, error } = useTeamRank('pitcher');

  if (isError) {
    return <div>{error?.toString()}</div>;
  }

  if (!ranking?.length) {
    return null;
  }

  return (
    <>
      <p className="text-neutral-400">ERA 비교 순위입니다.</p>
      <TeamRankingView
        tableData={ranking as TeamPitcherRank[]}
        chartData={ranking as TeamPitcherRank[]}
        columns={teamPitcherRankColumns}
        chartConfig={TeamRankingPitcherConfig}
        loading={isLoading}
        domain="all"
      />
    </>
  );
}

export { TeamPitcherRankingView };
