import { teamBatter as mockRanking } from '@/assets/data/__test__/mockRanking.json';
import { teamBatterRankColumns } from '@/constants/columns/team-rank-colums';
// import { useState } from "react";
// import { TeamBatterRank } from '@/features/common/types/batters';
// import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';
import DataTable from '@/features/common/DataTable';
// import { Config } from "@/features/player/components/PlayerRecordChart";
// import { TeamRankingBatterConfig } from "@/constants/chart-config";

function TeamBatterRankingTable() {
  // const [selectedTab, setSelectedTab] = useState<"table" | "chart">("table");
  // const [chartConfig, setChartConfig] = useState<Config>(
  //   TeamRankingBatterConfig
  // );

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
