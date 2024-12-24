import { ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  RecentRecord,
  SeasonBatter,
  SeasonPitcher,
  YearRecord,
} from '../player/types/record';

interface CustomBarChartProps {
  data: RecentRecord[] | YearRecord[] | SeasonPitcher[] | SeasonBatter[];
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
  return (
    <ChartContainer config={config} className="w-full h-52 mt-4">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} strokeOpacity={0.1} />
        <XAxis dataKey={XAxisKey} tickLine={false} axisLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          domain={['auto', (dataMax: number) => dataMax * 1.1]}
        />
        {Object.entries(config).map(([dataKey, value]) =>
          value.isActive ? (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              fill={`var(--color-${dataKey})`}
              radius={3}
              maxBarSize={40}
              label={{ position: 'top' }}
            />
          ) : null
        )}
      </BarChart>
    </ChartContainer>
  );
}

export default CustomBarChart;
