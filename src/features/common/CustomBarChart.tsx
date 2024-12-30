import { ChartContainer } from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { RecentRecord, YearRecord } from '../player/types/detail';
import { TeamBatterRank } from './types/batters';
import { TeamPitcherRank } from './types/pitchers';

interface Config {
  [key: string]: {
    label: string;
    color: string;
    isActive: boolean;
  };
}

type Data = RecentRecord | YearRecord | TeamPitcherRank | TeamBatterRank;
interface CustomBarChartProps {
  data: Data[];
  config: Config;
  XAxisKey: string;
}

function CustomBarChart({ data, config, XAxisKey }: CustomBarChartProps) {
  const activeKey = Object.keys(config).filter(
    (key) => config[key].isActive
  )[0];
  const [fontSize, setFontSize] = useState('16px');
  const [maxBarSize, setMaxBarSize] = useState(40);

  if (!data) {
    return null;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 모바일 화면 크기 기준
        setFontSize('10px');
        setMaxBarSize(18);
      } else {
        setFontSize('16px');
        setMaxBarSize(40);
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
          tick={{ fontSize }}
          domain={[
            0,
            () => {
              const max = Math.max(
                ...data.map((item: Data) =>
                  Number(item[activeKey as keyof Data])
                )
              ); // dataMax를 사용했더니 제대로 max 값을 찾지 못하는 버그가 있어 직접 계산
              return max === 0 ? 5 : (max * 1.1).toFixed(2); // 최대값에 여유를 두고 10% 확대
            },
          ]}
        />
        <Bar
          key={activeKey}
          dataKey={activeKey}
          fill={`var(--color-${activeKey})`}
          radius={3}
          maxBarSize={maxBarSize}
          label={{ position: 'top', fontSize }}
        />
      </BarChart>
    </ChartContainer>
  );
}

export default CustomBarChart;
