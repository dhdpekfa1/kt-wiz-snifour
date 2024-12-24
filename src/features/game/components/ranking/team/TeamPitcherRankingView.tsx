// import { TeamPitcherRank } from '@/features/common/types/pitchers';
// import { useTeamRank } from "@/features/game/hooks/ranking/useTeamRank";
import { teamPitcher as mockRanking } from '@/assets/data/__test__/mockRanking.json';
import data from '@/assets/data/__test__/season-team-rank/seasonPitcher.json';
import { TeamRankingPitcherConfig } from '@/constants/chart-config';
import { teamPitcherRankColumns } from '@/constants/columns/team-rank-colums';
import CustomBarChart from '@/features/common/CustomBarChart';
import DataTable from '@/features/common/DataTable';
import { Config } from '@/features/player/components/PlayerRecordChart';
import { SeasonPitcher } from '@/features/player/types/record';
import { useState } from 'react';

const seasonPitcherData: SeasonPitcher[] = data.data.list;

function TeamPitcherRankingView() {
  const [selectedTab, setSelectedTab] = useState<'table' | 'chart'>('table');
  const [chartConfig, setChartConfig] = useState<Config>(
    TeamRankingPitcherConfig
  );

  // const { ranking, loading, error } = useTeamRank('pitcher');

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

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
        <div>
          <CustomBarChart
            data={seasonPitcherData}
            config={chartConfig}
            XAxisKey={'teamName'}
          />
          <div className="flex flex-wrap items-center justify-start lg:justify-center gap-2 overflow-x-auto scroll-smooth">
            {Object.entries(chartConfig).map(([dataKey, value]) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={dataKey}
                className="text-white px-2 py-1 rounded max-sm:text-xs text-sm cursor-pointer whitespace-nowrap"
                style={{
                  background: value.isActive ? value.color : 'gray',
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

export { TeamPitcherRankingView };
