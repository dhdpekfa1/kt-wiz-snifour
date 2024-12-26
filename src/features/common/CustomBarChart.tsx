import { ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { RecentRecord, YearRecord } from '../player/types/detail';

interface Config {
  [key: string]: {
    label: string;
    color: string;
    isActive: boolean;
  };
}
interface CustomBarChartProps {
  data: RecentRecord[] | YearRecord[];
  config: Config;
  XAxisKey: string;
}

function CustomBarChart({ data, config, XAxisKey }: CustomBarChartProps) {
  const activeKey = Object.keys(config).filter(
    (key) => config[key].isActive
  )[0];

  return (
    <ChartContainer config={config} className="w-full h-52 mt-4">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} strokeOpacity={0.1} />
        <XAxis dataKey={XAxisKey} tickLine={false} axisLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          domain={[
            0,
            () => {
              const max = Math.max(
                ...data.map(
                  (item: RecentRecord | YearRecord) =>
                    item[
                      activeKey as keyof (RecentRecord | YearRecord)
                    ] as number
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
          maxBarSize={40}
          label={{ position: 'top' }}
        />
      </BarChart>
    </ChartContainer>
  );
}

export default CustomBarChart;
