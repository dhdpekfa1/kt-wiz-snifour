import { useState } from 'react';

import SubTitle from '@/features/common/SubTitle';
import { RecentRecord, YearRecord } from '../types/record';
import CustomBarChart from '@/features/common/CustomBarChart';
import CustomLineChart from '@/features/common/CustomLineChart';
import { cn } from '@/lib/utils';
import { RecordTableAccordion } from './RecordTableAccordion';

interface Config {
  [key: string]: {
    label: string;
    color: string;
    isActive: boolean;
  };
}
interface PlayerRecordChartProps {
  title: string;
  data: RecentRecord[] | YearRecord[];
  config: Config;
}

function PlayerRecordChart({ title, data, config }: PlayerRecordChartProps) {
  const [chartConfig, setChartConfig] = useState<Config>(config);
  const [chartType, setChartType] = useState<string>('bar');

  const handleConfig = (dataKey: keyof Config) => {
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
    <div className="w-full bg-wiz-white bg-opacity-10 rounded-xl px-4 pt-4 pb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SubTitle title={title} className="text-lg" />
        </div>
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
      <div className="w-full">
        {chartType === 'bar' && (
          <CustomBarChart data={data} config={chartConfig} XAxisKey="gyear" />
        )}
        {chartType === 'line' && (
          <CustomLineChart data={data} config={chartConfig} XAxisKey="gyear" />
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
        <RecordTableAccordion data={data} />
      </div>
    </div>
  );
}

export { PlayerRecordChart };
