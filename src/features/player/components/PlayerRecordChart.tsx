import { useState } from 'react';

import ChartLabelList from '@/features/common/ChartLabelList';
import CustomBarChart from '@/features/common/CustomBarChart';
import CustomLineChart from '@/features/common/CustomLineChart';
import SubTitle from '@/features/common/SubTitle';
import { cn } from '@/lib/utils';
import Skeleton from 'react-loading-skeleton';
import { RecentRecord, YearRecord } from '../types/detail';
import { RecordTableAccordion } from './RecordTableAccordion';

export interface Config {
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
  loading: boolean;
}

function PlayerRecordChart({
  title,
  data,
  config,
  loading,
}: PlayerRecordChartProps) {
  const [chartConfig, setChartConfig] = useState<Config>(config);
  const [chartType, setChartType] = useState<string>('bar');
  const [currentConfig, setCurrentConfig] = useState<keyof Config>(
    Object.keys(chartConfig)[0]
  );

  if (!data) {
    return <div>데이터가 존재하지 않습니다.</div>;
  }

  const handleConfig = (dataKey: keyof Config) => {
    if (currentConfig === dataKey) {
      return;
    }

    setCurrentConfig(dataKey);
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
      <div
        className={cn(
          'flex flex-col ',
          'md:flex-row md:items-center md:justify-between'
        )}
      >
        <SubTitle title={title} className="text-lg" />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={cn(
              'bg-white text-black px-1 py-0.5 my-2 text-xs rounded',
              'md:px-2 md:py-1 md:text-sm',
              chartType === 'bar' && 'text-white bg-wiz-red'
            )}
            onClick={() => setChartType('bar')}
          >
            막대 차트
          </button>
          <button
            type="button"
            className={cn(
              'bg-white text-black px-1 py-0.5 my-2 text-xs rounded',
              'md:px-2 md:py-1 md:text-sm',
              chartType === 'line' && 'text-white bg-wiz-red'
            )}
            onClick={() => setChartType('line')}
          >
            선 차트
          </button>
        </div>
      </div>
      {loading && <Skeleton className="w-full h-72" />}
      {!loading && data.length === 0 && (
        <div className="w-full h-72 flex items-center justify-center">
          데이터가 존재하지 않습니다.
        </div>
      )}
      {!loading && data.length > 0 && (
        <>
          <div className="w-full">
            {chartType === 'bar' && (
              <CustomBarChart
                data={data}
                config={chartConfig}
                XAxisKey="gyear"
              />
            )}
            {chartType === 'line' && (
              <CustomLineChart
                data={data}
                config={chartConfig}
                XAxisKey="gyear"
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <ChartLabelList config={chartConfig} onClick={handleConfig} />
            <div className="text-xs text-neutral-400 break-keep text-center">
              해당 라벨을 클릭하여 데이터 표시 정보를 변경할 수 있습니다.
            </div>
            <RecordTableAccordion data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export { PlayerRecordChart };
