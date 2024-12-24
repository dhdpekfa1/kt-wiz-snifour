import { teamBatter as mockRanking } from '@/assets/data/__test__/mockRanking.json';
import data from '@/assets/data/__test__/season-team-rank/seasonBatter.json';
import { TeamRankingBatterConfig } from '@/constants/chart-config';
import { teamBatterRankColumns } from '@/constants/columns/team-rank-colums';
import CustomBarChart from '@/features/common/CustomBarChart';
// import { TeamBatterRank } from '@/features/common/types/batters';
// import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';
import DataTable from '@/features/common/DataTable';
import { Config } from '@/features/player/components/PlayerRecordChart';
import { SeasonBatter } from '@/features/player/types/record';
import { useState } from 'react';

const seasonBatterData: SeasonBatter[] = data.data.list;

function TeamBatterRankingTable() {
  const [selectedTab, setSelectedTab] = useState<'table' | 'chart'>('table');
  const [chartConfig, setChartConfig] = useState<Config>(
    TeamRankingBatterConfig
  );

  const handleConfig = (dataKey: keyof Config) => {
    const currentConfig = Object.keys(chartConfig).filter(
      (key) => chartConfig[key].isActive
    )[0];

    if (currentConfig === dataKey) {
      return;
    }

    setChartConfig((prev) => {
      // 모든 항목을 비활성화한 뒤 클릭한 버튼만 활성화
      const newConfig = Object.keys(prev).reduce((acc, key) => {
        acc[key] = { ...prev[key], isActive: false }; // 모든 항목 비활성화
        return acc;
      }, {} as Config);

      // 클릭한 버튼만 활성화
      newConfig[dataKey] = {
        ...prev[dataKey],
        isActive: !prev[dataKey].isActive,
      };
      return newConfig;
    });
  };

  // const { ranking, loading, error } = useTeamRank('batter');

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
          columns={teamBatterRankColumns}
          domain="all"
        />
      ) : (
        <div>
          <CustomBarChart
            data={seasonBatterData}
            config={chartConfig}
            XAxisKey={'teamName'}
          />
          <div
            className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto scroll-smooth"
            style={{ scrollPaddingLeft: '16px' }}
          >
            {Object.entries(chartConfig).map(([dataKey, value]) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={dataKey}
                className="text-white px-2 py-1 rounded text-sm cursor-pointer"
                style={{
                  background: value.isActive ? value.color : 'gray',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => handleConfig(dataKey)}
              >
                {value.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { TeamBatterRankingTable };
