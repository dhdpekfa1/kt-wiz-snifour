import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { RecentRecord, YearRecord } from '../player/types/record';
import { ChartContainer } from '@/components/ui/chart';

interface CustomBarChartProps {
  data: RecentRecord[] | YearRecord[];
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
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        {Object.entries(config).map(([dataKey, value]) =>
          value.isActive ? (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              fill={`var(--color-${dataKey})`}
              radius={3}
              maxBarSize={40}
            />
          ) : null
        )}
      </BarChart>
    </ChartContainer>
  );
}

export default CustomBarChart;
