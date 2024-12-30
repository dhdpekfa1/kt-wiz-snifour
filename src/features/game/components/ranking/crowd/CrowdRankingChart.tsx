import { ChartContainer } from '@/components/ui/chart';
import { CrowdRank } from '@/features/game/types/crowd-ranking';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from 'react';

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
  const [fontSize, setFontSize] = useState('16px');

  if (!data) {
    return null;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 모바일 화면 크기 기준
        setFontSize('8px');
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
    <ChartContainer config={chartConfig} className="w-full h-96 mb-8">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} strokeOpacity={0.1} />
        <XAxis
          dataKey="teamName"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize }}
        />
        <YAxis
          dataKey="crowd"
          tickLine={false}
          axisLine={false}
          domain={[0, 'dataMax+50000']}
          tick={{ fontSize }}
        />
        <Bar
          dataKey="crowd"
          fill="var(--color-crowd)"
          radius={4}
          maxBarSize={40}
          label={{ position: 'top', fontSize }}
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
