import { teamRankColums } from '@/constants/columns/team-rank-colums';
import { DataTable } from '@/features/common';
import { useTeamRank } from '@/features/game/hooks/ranking/useTeamRank';

function TeamRankingTable() {
  const { ranking, isLoading, isError, error } = useTeamRank('team');

  if (isError) {
    return (
      <div className="w-full min-h-48 flex items-center justify-center font-bold text-2xl">
        Error!: {error?.toString()}
      </div>
    );
  }

  if (!ranking?.length) {
    return (
      <div className="w-full min-h-48 flex items-center justify-center font-bold text-2xl">
        데이터가 존재하지 않습니다.
      </div>
    );
  }

  return (
    <DataTable
      data={ranking}
      columns={teamRankColums}
      loading={isLoading}
      domain="all"
    />
  );
}

export { TeamRankingTable };
