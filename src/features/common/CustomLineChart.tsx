import { ChartContainer } from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { RecentRecord, YearRecord } from '../player/types/record';

interface CustomLineChartProps {
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

function CustomLineChart({ data, config, XAxisKey }: CustomLineChartProps) {
  return (
    <ChartContainer config={config} className="w-full h-52 mt-4">
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} strokeOpacity={0.1} />
        <XAxis dataKey={XAxisKey} tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        {/* <Tooltip /> */}
        {Object.entries(config).map(([dataKey, value]) =>
          value.isActive ? (
            <Line
              key={dataKey}
              dataKey={dataKey}
              stroke={`var(--color-${dataKey})`}
              strokeWidth={3}
              dot={{ fill: `var(--color-${dataKey})` }}
            />
          ) : null
        )}
      </LineChart>
    </ChartContainer>
  );
}

export default CustomLineChart;
