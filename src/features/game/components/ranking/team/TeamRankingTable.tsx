import { teamRankColums } from '@/constants/columns/team-rank-colums';
import DataTable from '@/features/common/DataTable';
import { useTeamRank } from '@/features/game/hooks/ranking/useTeamRank';
import { TeamStats } from '@/features/game/types/team-ranking';

function TeamRankingTable() {
  const { ranking, loading, error } = useTeamRank('team');

  if (loading) {
    return (
      <div className="w-full min-h-48 flex items-center justify-center font-bold text-2xl">
        데이터 불러오는 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-48 flex items-center justify-center font-bold text-2xl">
        Error!: {error}
      </div>
    );
  }

  if (!ranking.length) {
    return (
      <div className="w-full min-h-48 flex items-center justify-center font-bold text-2xl">
        데이터가 존재하지 않습니다.
      </div>
    );
  }

  return (
    <DataTable
      data={ranking as TeamStats[]}
      columns={teamRankColums}
      domain="all"
    />
  );
}

export { TeamRankingTable };
