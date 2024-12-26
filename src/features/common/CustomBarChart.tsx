import { ChartContainer } from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { RecentRecord, YearRecord } from '../player/types/record';
import { TeamBatterRank } from './types/batters';
import { TeamPitcherRank } from './types/pitchers';

interface CustomBarChartProps {
  data: RecentRecord[] | YearRecord[] | TeamPitcherRank[] | TeamBatterRank[];
  config: {
    [key: string]: {
      label: string;
      color: string;
      isActive: boolean;
    };
  };
  XAxisKey: string;
}

function CustomBarChart({ data, config, XAxisKey }: CustomBarChartProps) {
  const [fontSize, setFontSize] = useState('16px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 모바일 화면 크기 기준
        setFontSize('10px');
      } else {
        setFontSize('16px');
      }
    };

    // 초기 화면 크기 설정
    handleResize();
    // 화면 크기 변경 감지
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ChartContainer config={config} className="w-full h-52 mt-4">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} strokeOpacity={0.1} />
        <XAxis
          dataKey={XAxisKey}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          domain={['auto', (dataMax: number) => dataMax * 1.1]}
          tick={{ fontSize }}
        />
        {Object.entries(config).map(([dataKey, value]) =>
          value.isActive ? (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              fill={`var(--color-${dataKey})`}
              radius={3}
              maxBarSize={40}
              label={{ position: 'top', fontSize: fontSize }}
            />
          ) : null
        )}
      </BarChart>
    </ChartContainer>
  );
}

export default CustomBarChart;
