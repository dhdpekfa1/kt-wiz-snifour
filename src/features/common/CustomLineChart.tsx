import { ChartContainer } from '@/components/ui/chart';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
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

interface CustomTooltipProps extends TooltipProps<string, string> {
  dataKey: string;
}

function CustomTooltip({ active, payload, dataKey }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const value = payload[0].value;

    return (
      <div className="bg-white flex items-center gap-2 rounded p-2">
        <span className="w-fit text-sm bg-wiz-black text-white rounded text-center px-2 py-1">
          {dataKey}
        </span>
        <span className="text-black">{value}</span>
      </div>
    );
  }

  return null;
}

function CustomLineChart({ data, config, XAxisKey }: CustomLineChartProps) {
  const key: keyof typeof config =
    Object.keys(config).find((key) => config[key].isActive) || '';
  const dataKey = config[key].label;

  return (
    <ChartContainer config={config} className="w-full h-52 mt-4">
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} strokeOpacity={0.1} />
        <XAxis dataKey={XAxisKey} tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip dataKey={dataKey} />} />
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
