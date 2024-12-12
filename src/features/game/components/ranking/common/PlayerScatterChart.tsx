import { useMemo } from 'react';

import { OverallPitcherRank } from '@/features/common/types/Pitchers';
import {
  CartesianGrid,
  Cell,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import { Props } from 'recharts/types/container/Surface';
import { cn } from '@/lib/utils';
import SubTitle from '@/features/common/SubTitle';

interface PlayerScatterChartProps {
  data: OverallPitcherRank[];
  position: 'pitcher' | 'batter';
}

interface CellProps {
  cx: number;
  cy: number;
  payload: OverallPitcherRank & { color: string };
}

function PlayerScatterChart({ data, position }: PlayerScatterChartProps) {
  const { x, y, xLabel, yLabel } = useMemo(() => {
    return position === 'pitcher'
      ? { x: 'wra', xLabel: '승률', y: 'era', yLabel: '평균자책점' }
      : { x: 'ops', xLabel: 'OPS', y: 'hra', yLabel: '타율' };
  }, [position]);

  const chartData = useMemo(() => {
    if (position === 'pitcher') {
      const filteredData = data
        .filter((player) => player.gamenum >= 10)
        .sort(
          (a, b) =>
            Number(b.wra) / Number(b.era) - Number(a.wra) / Number(a.era)
        );

      return filteredData.map((pitcher, index) => {
        const result = {
          ...pitcher,
          era: Number(pitcher.era),
          wra: Number(pitcher.wra),
        };
        if (index < filteredData.length * 0.33) {
          return {
            ...result,
            color: 'bg-[#059212]',
          };
        }
        if (index < filteredData.length * 0.66) {
          return {
            ...result,
            color: 'bg-[#ffba08]',
          };
        }
        return {
          ...result,
          color: 'bg-gray-500',
        };
      });
    }

    if (position === 'batter') {
      // batter
    }
  }, [data, position]);

  const renderImageCell = (props: unknown) => {
    const { cx, cy, payload } = props as Props & CellProps; // cx와 cy는 점의 좌표, payload는 데이터
    return (
      <foreignObject
        x={cx - 15} // 이미지 위치 (중앙 정렬)
        y={cy - 15} // 이미지 위치 (중앙 정렬)
        width={30} // 이미지 너비
        height={30} // 이미지 높이
      >
        <div className={cn('w-full h-full rounded-full p-1', payload.color)}>
          <img
            src={payload.playerPrvwImg}
            alt={payload.playerName}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </foreignObject>
    );
  };

  return (
    <div>
      <SubTitle title={`${xLabel}과 ${yLabel} 비교`} />
      <div className="text-neutral-500 my-4">
        <p className="my-1">10경기 이상 출장한 선수만 표시합니다.</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="bg-[#059212] w-5 h-5 rounded-full" />
            <p>상위권</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#ffba08] w-5 h-5 rounded-full" />
            <p>중위권</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-gray-500 w-5 h-5 rounded-full" />
            <p>하위권</p>
          </div>
        </div>
      </div>
      <ScatterChart width={1200} height={400}>
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey={x}
          label={{ value: xLabel, position: 'insideBottom' }}
          height={50}
          domain={['dataMin', 'auto']}
        />
        <YAxis
          type="number"
          dataKey={y}
          label={{ value: yLabel, angle: 90, position: 'insideLeft' }}
          domain={['dataMin', 'auto']}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Scatter
          name={`${xLabel}과 ${yLabel} 비교`}
          data={chartData}
          shape={renderImageCell}
        >
          {data.map((entry) => (
            <Cell key={entry.pcode} />
          ))}
        </Scatter>
      </ScatterChart>
    </div>
  );
}

export { PlayerScatterChart };
