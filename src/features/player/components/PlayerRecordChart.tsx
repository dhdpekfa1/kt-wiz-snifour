import SubTitle from '@/features/common/SubTitle';
import { RecentRecord, YearRecord } from '../types/record';
import CustomBarChart from '@/features/common/CustomBarChart';
import { ReactNode, useState } from 'react';
import CustomLineChart from '@/features/common/CustomLineChart';
import { cn } from '@/lib/utils';
import {
  recentPitcherConfig,
  yearPitcherConfig,
} from '@/constants/chart-config';

interface PlayerRecordChartProps {
  children: ReactNode;
}
interface RecentRecordChartProps {
  data: RecentRecord[];
}

interface YearRecordChartProps {
  data: YearRecord[];
}
interface Config {
  [key: string]: {
    label: string;
    color: string;
    isActive: boolean;
  };
}

function RecentRecordChart({ data }: RecentRecordChartProps) {
  const [config, setConfig] = useState<Config>(recentPitcherConfig);
  const [chartType, setChartType] = useState<string>('bar');

  const handleConfig = (dataKey: keyof Config) => {
    setConfig((prev) => {
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
    <PlayerRecordChart>
      <div className="flex items-center justify-between">
        <SubTitle title="최근 5경기" className="text-lg" />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={cn(
              'bg-white text-black px-2 py-1 text-sm rounded',
              chartType === 'bar' && 'text-white bg-wiz-red'
            )}
            onClick={() => setChartType('bar')}
          >
            막대 차트
          </button>
          <button
            type="button"
            className={cn(
              'bg-white text-black px-2 py-1 text-sm rounded',
              chartType === 'line' && 'text-white bg-wiz-red'
            )}
            onClick={() => setChartType('line')}
          >
            선 차트
          </button>
        </div>
      </div>
      {/* 차트 */}
      <div className="h-full">
        {chartType === 'bar' && (
          <CustomBarChart data={data} config={config} XAxisKey="displayDate" />
        )}
        {chartType === 'line' && (
          <CustomLineChart data={data} config={config} XAxisKey="displayDate" />
        )}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-4">
            {Object.entries(config).map(([dataKey, value]) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={dataKey}
                className="text-white px-2 py-1 rounded text-sm cursor-pointer"
                style={{ background: value.isActive ? value.color : 'gray' }}
                onClick={() => handleConfig(dataKey)}
              >
                {value.label}
              </div>
            ))}
          </div>
          <div className="text-xs text-neutral-400">
            해당 라벨을 클릭하여 데이터 표시 정보를 변경할 수 있습니다.
          </div>
        </div>
      </div>
    </PlayerRecordChart>
  );
}

function YearRecordChart({ data }: YearRecordChartProps) {
  const [config, setConfig] = useState<Config>(yearPitcherConfig);
  const [chartType, setChartType] = useState<string>('bar');

  const handleConfig = (dataKey: keyof Config) => {
    setConfig((prev) => {
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
    <PlayerRecordChart>
      <div className="flex items-center justify-between">
        <SubTitle title="통산 기록" className="text-lg" />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={cn(
              'bg-white text-black px-2 py-1 text-sm rounded',
              chartType === 'bar' && 'text-white bg-wiz-red'
            )}
            onClick={() => setChartType('bar')}
          >
            막대 차트
          </button>
          <button
            type="button"
            className={cn(
              'bg-white text-black px-2 py-1 text-sm rounded',
              chartType === 'line' && 'text-white bg-wiz-red'
            )}
            onClick={() => setChartType('line')}
          >
            선 차트
          </button>
        </div>
      </div>
      {/* 차트 */}
      <div className="w-full">
        {chartType === 'bar' && (
          <CustomBarChart data={data} config={config} XAxisKey="gyear" />
        )}
        {chartType === 'line' && (
          <CustomLineChart data={data} config={config} XAxisKey="gyear" />
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-4">
          {Object.entries(config).map(([dataKey, value]) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={dataKey}
              className="text-white px-2 py-1 rounded text-sm cursor-pointer"
              style={{ background: value.isActive ? value.color : 'gray' }}
              onClick={() => handleConfig(dataKey)}
            >
              {value.label}
            </div>
          ))}
        </div>
        <div className="text-xs text-neutral-400">
          해당 라벨을 클릭하여 데이터 표시 정보를 변경할 수 있습니다.
        </div>
      </div>
    </PlayerRecordChart>
  );
}

function PlayerRecordChart({ children }: PlayerRecordChartProps) {
  return (
    <div className="w-full bg-wiz-white bg-opacity-10 rounded-xl px-4 pt-4 pb-8">
      {children}
    </div>
  );
}

PlayerRecordChart.Recent = RecentRecordChart;
PlayerRecordChart.Year = YearRecordChart;

export { PlayerRecordChart };
