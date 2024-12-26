import { cn } from '@/lib/utils';
import { SeasonSummaryBase } from '../types/detail';
import { Progress } from '@/components/ui/progress';

const indicators: {
  accessorKey: keyof SeasonSummaryBase;
  header: string;
}[] = [
  { accessorKey: 'era', header: '평균자책점' },
  { accessorKey: 'gamenum', header: '경기 수' },
  { accessorKey: 'wCg', header: '완투' },
  { accessorKey: 'sho', header: '완봉' },
  { accessorKey: 'w', header: '승' },
  { accessorKey: 'l', header: '패' },
  { accessorKey: 'sv', header: '세이브' },
  { accessorKey: 'hold', header: '홀드' },
  { accessorKey: 'wra', header: '승률' },
  { accessorKey: 'tugucount', header: '타자' }, // ? 중복?
  { accessorKey: 'tugucount', header: '투구 수' },
  { accessorKey: 'innDisplay', header: '이닝' },
  { accessorKey: 'hit', header: '피안타' },
  { accessorKey: 'hr', header: '피홈런' },
  { accessorKey: 'sf', header: '희비' },
  { accessorKey: 'sh', header: '희타' },
  { accessorKey: 'bb', header: '볼넷' },
  { accessorKey: 'ib', header: '고의4구' },
  { accessorKey: 'hp', header: '사구' },
  { accessorKey: 'kk', header: '탈삼진' },
  { accessorKey: 'wp', header: '폭투' },
  { accessorKey: 'bk', header: '보크' },
  { accessorKey: 'r', header: '실점' },
  { accessorKey: 'er', header: '자책점' },
  { accessorKey: 'bs', header: '블론세이브' },
  { accessorKey: 'whip', header: 'WHIP' },
  { accessorKey: 'oavg', header: '피안타율' },
  { accessorKey: 'qs', header: 'QS' },
  { accessorKey: 'kbb', header: 'K/BB' },
];

interface SeasonSummaryProps {
  data: SeasonSummaryBase;
  maxStats: { [key: keyof SeasonSummaryBase | string]: number };
}

function SeasonSummary({ data, maxStats }: SeasonSummaryProps) {
  const ipg = Number((Number(data.inn2) / Number(data.gamenum)).toFixed(3));
  return (
    <div
      className={cn(
        'grid grid-cols-4 gap-2 my-4',
        'md:grid-cols-6 md:gap-3',
        'lg:grid-cols-10 lg:gap-4'
      )}
    >
      {indicators.map(({ accessorKey, header }) => (
        <div
          key={accessorKey}
          className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 rounded-xl border border-wiz-red border-opacity-20 aspect-square"
        >
          <p className="font-bold text-xs md:text-sm">{header}</p>
          <Progress
            value={
              maxStats[accessorKey] > 0
                ? Math.round(
                    (Number(data[accessorKey]) / maxStats[accessorKey]) * 100
                  )
                : 0
            }
            className="text-white w-[75%] h-1"
          />
          <p className="text-base md:text-lg lg:text-xl">{data[accessorKey]}</p>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 rounded-xl border border-wiz-red border-opacity-20 aspect-square">
        <p className="font-bold text-xs md:text-sm">IP/G</p>
        <Progress
          value={maxStats.ipg > 0 ? Math.round((ipg / maxStats.ipg) * 100) : 0}
          className="text-white w-[75%] h-1"
        />
        <p className="text-base md:text-lg lg:text-xl">{ipg}</p>
      </div>
    </div>
  );
}

export { SeasonSummary };
