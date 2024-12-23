// import { TeamPitcherRank } from '@/features/common/types/pitchers';
// import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';
import { teamPitcher as mockRanking } from '@/assets/data/__test__/mockRanking.json';
import { teamPitcherRankColumns } from '@/constants/columns/team-rank-colums';
import DataTable from '@/features/common/DataTable';
import { useState } from 'react';

function TeamPitcherRankingTable() {
  const [selectedTab, setSelectedTab] = useState<'table' | 'chart'>('table');

  // const { ranking, loading, error } = useTeamRank('pitcher');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div>
      <div className="flex items-center gap-2 justify-end">
        <button
          type="button"
          className={`text-center w-12 bg-white text-black px-2 py-1 text-sm rounded ${
            selectedTab === 'table' ? 'bg-wiz-red text-wiz-white' : 'bg-white'
          }`}
          onClick={() => setSelectedTab('table')}
        >
          표
        </button>
        <button
          type="button"
          className={`text-center w-12 bg-white text-black px-2 py-1 text-sm rounded ${
            selectedTab === 'chart' ? 'bg-wiz-red text-wiz-white' : 'bg-white'
          }`}
          onClick={() => setSelectedTab('chart')}
        >
          차트
        </button>
      </div>
      {selectedTab === 'table' ? (
        <DataTable
          data={mockRanking}
          columns={teamPitcherRankColumns}
          domain="all"
        />
      ) : (
        <div>check</div>
      )}
    </div>
  );
}

export { TeamPitcherRankingTable };
