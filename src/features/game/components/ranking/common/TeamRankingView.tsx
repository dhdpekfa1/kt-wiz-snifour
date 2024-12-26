import CustomBarChart from '@/features/common/CustomBarChart';
import DataTable from '@/features/common/DataTable';
import { Config } from '@/features/player/components/PlayerRecordChart';
import {
  RecentRecord,
  SeasonBatter,
  SeasonPitcher,
  YearRecord,
} from '@/features/player/types/record';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

interface TeamRankingViewProps<T> {
  tableData: T[];
  chartData: RecentRecord[] | YearRecord[] | SeasonPitcher[] | SeasonBatter[];
  columns: ColumnDef<T>[];
  chartConfig: Config;
  domain: 'kt' | 'all' | undefined;
}

function TeamRankingView<T>({
  tableData,
  chartData,
  columns,
  chartConfig: initialChartConfig,
  domain,
}: TeamRankingViewProps<T>) {
  const [selectedTab, setSelectedTab] = useState<'table' | 'chart'>('table');
  const [chartConfig, setChartConfig] = useState<Config>(initialChartConfig);

  const handleConfig = (dataKey: keyof Config) => {
    const currentConfig = Object.keys(chartConfig).find(
      (key) => chartConfig[key].isActive
    );

    if (currentConfig === dataKey) {
      return;
    }

    setChartConfig((prev) => {
      const newConfig = Object.keys(prev).reduce((acc, key) => {
        acc[key] = { ...prev[key], isActive: false };
        return acc;
      }, {} as Config);

      newConfig[dataKey] = {
        ...prev[dataKey],
        isActive: true,
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
        <DataTable data={tableData} columns={columns} domain={domain} />
      ) : (
        <div>
          <CustomBarChart
            data={chartData}
            config={chartConfig}
            XAxisKey="teamName"
          />
          <div className="flex flex-wrap items-center justify-start lg:justify-center md:ml-8 gap-2">
            {Object.keys(chartConfig).map((key) => (
              <button
                type="button"
                key={key}
                className={`px-2 py-1 text-sm rounded ${
                  chartConfig[key].isActive
                    ? 'text-wiz-white'
                    : 'bg-wiz-white bg-opacity-30'
                }`}
                style={{
                  backgroundColor: chartConfig[key].isActive
                    ? chartConfig[key].color
                    : undefined,
                }}
                onClick={() => handleConfig(key as keyof Config)}
              >
                {chartConfig[key].label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamRankingView;
