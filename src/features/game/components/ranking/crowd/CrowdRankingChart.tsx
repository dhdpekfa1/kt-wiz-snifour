import { ChartContainer } from '@/components/ui/chart';
import { CrowdRank } from '@/features/game/types/crowd-ranking';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomTooltip from '../common/CustomTooltip';

interface CrowdRankingChartProps {
  data: CrowdRank[];
}

const chartConfig = {
  crowd: {
    label: '관중',
    color: '#aaaaaa',
  },
};

function CrowdRankingChart({ data }: CrowdRankingChartProps) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-96 mb-8">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} strokeOpacity={0.1} />
        <Tooltip content={<CustomTooltip type="crowd" />} />
        <XAxis dataKey="teamName" tickLine={false} axisLine={false} />
        <YAxis dataKey="crowd" tickLine={false} axisLine={false} />
        <Bar
          dataKey="crowd"
          fill="var(--color-crowd)"
          radius={4}
          maxBarSize={40}
        >
          {data.map((team) => (
            <Cell
              fill={team.teamCode === 'KT' ? '#D60C0C' : 'var(--color-crowd)'}
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

export { CrowdRankingChart };
