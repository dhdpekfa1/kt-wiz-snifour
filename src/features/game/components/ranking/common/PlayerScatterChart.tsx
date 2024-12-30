import { useEffect, useMemo, useState } from 'react';

import SubTitle from '@/features/common/SubTitle';
import { OverallBatterRank } from '@/features/common/types/batters';
import { OverallPitcherRank } from '@/features/common/types/pitchers';
import { cn } from '@/lib/utils';
import {
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Props } from 'recharts/types/container/Surface';
import CustomTooltip from './CustomTooltip';

type PlayerRank = OverallPitcherRank | OverallBatterRank;

interface PlayerScatterChartProps<T extends PlayerRank> {
  data: T[];
  position: 'pitcher' | 'batter';
}

interface CellProps<T extends PlayerRank> {
  cx: number;
  cy: number;
  payload: T & { color: string };
}

function PlayerScatterChart<T extends PlayerRank>({
  data,
  position,
}: PlayerScatterChartProps<T>) {
  const { x, y, xLabel, yLabel } = useMemo(() => {
    return position === 'pitcher'
      ? { x: 'wra', xLabel: '승률', y: 'era', yLabel: '평균자책점' }
      : { x: 'hra', xLabel: '타율', y: 'ops', yLabel: 'OPS' };
  }, [position]);

  const [fontSize, setFontSize] = useState('16px');
  const [aspect, setAspect] = useState(3);
  const [cellSize, setCellSize] = useState({
    width: 30,
    height: 30,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 모바일 화면 크기 기준
        setFontSize('10px');
        setAspect(2);
        setCellSize({ width: 18, height: 18 });
      } else {
        setFontSize('16px');
        setAspect(3);
        setCellSize({ width: 30, height: 30 });
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

  const chartData = useMemo(() => {
    const filteredData = data
      .filter((player) => player.gamenum >= 10)
      .sort((a, b) => {
        if (position === 'pitcher') {
          return (
            Number((b as OverallPitcherRank).wra) /
              Number((b as OverallPitcherRank).era) -
            Number((a as OverallPitcherRank).wra) /
              Number((a as OverallPitcherRank).era)
          );
        }

        return (
          Number((b as OverallBatterRank).ops) +
          Number((b as OverallBatterRank).hra) -
          (Number((a as OverallBatterRank).ops) +
            Number((a as OverallBatterRank).hra))
        );
      });

    if (position === 'pitcher') {
      return filteredData.map((pitcher, index) => {
        const result = {
          ...pitcher,
          era: Number((pitcher as OverallPitcherRank).era),
          wra: Number((pitcher as OverallPitcherRank).wra),
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
      return filteredData.map((batter, index) => {
        const result = {
          ...batter,
          ops: Number((batter as OverallBatterRank).ops),
          hra: Number((batter as OverallBatterRank).hra),
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
  }, [data, position]);

  const renderImageCell = (props: unknown) => {
    const { cx, cy, payload } = props as Props & CellProps<T>; // cx와 cy는 점의 좌표, payload는 데이터
    return (
      <foreignObject
        x={cx - cellSize.width / 2} // 이미지 위치 (중앙 정렬)
        y={cy - cellSize.height / 2} // 이미지 위치 (중앙 정렬)
        width={cellSize.width} // 이미지 너비
        height={cellSize.height} // 이미지 높이
      >
        <div
          className={cn(
            'w-full h-full rounded-full p-0.5 md:p-1',
            payload.color
          )}
        >
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
      <div className="text-neutral-500 mb-1 md:mb-2 lg:mb-4">
        <p className={cn('text-xs md:text-sm lg:text-base')}>
          10경기 이상 출장한 선수만 표시합니다.
        </p>
        <div className="flex items-center gap-4 text-xs md:text-sm lg:text-base">
          <div className="flex items-center gap-1">
            <div
              className={cn(
                'bg-[#059212] rounded-full w-3 h-3',
                'md:w-4 md:h-4',
                'lg:w-5 lg:h-5'
              )}
            />
            <p>상위권</p>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={cn(
                'bg-[#ffba08] rounded-full w-3 h-3',
                'md:w-4 md:h-4',
                'lg:w-5 lg:h-5'
              )}
            />
            <p>중위권</p>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={cn(
                'bg-gray-500 rounded-full w-3 h-3',
                'md:w-4 md:h-4',
                'lg:w-5 lg:h-5'
              )}
            />
            <p>하위권</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer aspect={aspect}>
        <ScatterChart data={data}>
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey={x}
            label={{
              value: xLabel,
              position: 'insideBottom',
              fontSize,
            }}
            height={50}
            domain={['dataMin', 'auto']}
            tick={{ fontSize }}
          />
          <YAxis
            type="number"
            dataKey={y}
            label={{
              value: yLabel,
              angle: 90,
              position: 'insideLeft',
              fontSize,
            }}
            domain={['dataMin', 'auto']}
            tick={{ fontSize }}
          />
          <Tooltip
            content={<CustomTooltip type={position} />}
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
      </ResponsiveContainer>
    </div>
  );
}

export { PlayerScatterChart };
