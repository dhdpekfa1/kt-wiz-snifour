import { cn } from '@/lib/utils';
import { useParams } from 'react-router';

import { useMaxStats } from '@/features/player/hooks/useMaxStats';
import { usePlayer } from '@/features/player/hooks/usePlayer';
import {
  BatterSeasonSummaryBase,
  PitcherSeasonSummaryBase,
} from '@/features/player/types/detail';
import { StatCard } from './StatCard';

interface Indicators {
  pitcher: {
    accessorKey: keyof PitcherSeasonSummaryBase;
    header: string;
  }[];
  batter: {
    accessorKey: keyof BatterSeasonSummaryBase;
    header: string;
  }[];
}

const indicators: Indicators = {
  pitcher: [
    { accessorKey: 'era', header: '평균자책점' },
    { accessorKey: 'gamenum', header: '경기 수' },
    { accessorKey: 'wCg', header: '완투' },
    { accessorKey: 'sho', header: '완봉' },
    { accessorKey: 'w', header: '승' },
    { accessorKey: 'l', header: '패' },
    { accessorKey: 'sv', header: '세이브' },
    { accessorKey: 'hold', header: '홀드' },
    { accessorKey: 'wra', header: '승률' },
    { accessorKey: 'bf', header: '타자' },
    { accessorKey: 'tugucount', header: '투구 수' },
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
  ],
  batter: [
    { accessorKey: 'hra', header: '타율' },
    { accessorKey: 'gamenum', header: '경기' },
    { accessorKey: 'pa', header: '타석' },
    { accessorKey: 'ab', header: '타수' },
    { accessorKey: 'run', header: '득점' },
    { accessorKey: 'hit', header: '안타' },
    { accessorKey: 'h2', header: '2루타' },
    { accessorKey: 'h3', header: '3루타' },
    { accessorKey: 'hr', header: '홈런' },
    { accessorKey: 'rbi', header: '타점' },
    { accessorKey: 'sb', header: '도루' },
    { accessorKey: 'cs', header: '도실' },
    { accessorKey: 'sf', header: '희타' },
    { accessorKey: 'sh', header: '희비' },
    { accessorKey: 'bb', header: '볼넷' },
    { accessorKey: 'ib', header: '고의4구' },
    { accessorKey: 'hp', header: '사구' },
    { accessorKey: 'kk', header: '삼진' },
    { accessorKey: 'gd', header: '병살' },
    { accessorKey: 'slg', header: '장타율' },
    { accessorKey: 'bra', header: '출루율' },
    { accessorKey: 'sba', header: '도루성공률' },
    { accessorKey: 'bbkk', header: 'BB/K' },
    { accessorKey: 'xbhrun', header: '장타/안타' },
    { accessorKey: 'ops', header: 'OPS' },
    { accessorKey: 'spHra', header: '득점권타율' },
  ],
};

function calculateIPG(inn: number, gamenum: number) {
  return gamenum > 0 ? Number((inn / gamenum).toFixed(3)) : 0;
}

function SeasonSummary() {
  const { position } = useParams();
  const role = position === 'pitcher' ? 'pitcher' : 'batter';
  const { player, isLoading } = usePlayer();
  const { maxStats, isLoading: maxStatsLoading } = useMaxStats();

  if (isLoading) {
    return <div className="text-center">데이터를 불러오는 중입니다...</div>;
  }
  const data = player?.seasonsummary;

  if (!data) {
    return (
      <div className="font-bold text-center my-4">
        정규 리그 데이터가 없습니다.
      </div>
    );
  }

  if (maxStatsLoading) {
    return <div className="text-center">스탯 계산중입니다...</div>;
  }

  if (!maxStats) {
    return <div className="text-center">팀 성적 계산 중입니다...</div>;
  }

  const indicatorsForRole = indicators[role];
  const isPitcher = role === 'pitcher';
  const ipg = isPitcher
    ? calculateIPG(data.gamenum, (data as PitcherSeasonSummaryBase).inn2)
    : 0;

  return (
    <div
      className={cn(
        'grid grid-cols-4 gap-2 my-4',
        'md:grid-cols-6 md:gap-3',
        'lg:grid-cols-10 lg:gap-4'
      )}
    >
      {indicatorsForRole.map(({ accessorKey, header }) => {
        const statValue =
          role === 'pitcher'
            ? (data as PitcherSeasonSummaryBase)[
                accessorKey as keyof PitcherSeasonSummaryBase
              ] || 0
            : (data as BatterSeasonSummaryBase)[
                accessorKey as keyof BatterSeasonSummaryBase
              ] || 0;

        const progressValue =
          maxStats[accessorKey] > 0
            ? Math.round((Number(statValue) / maxStats[accessorKey]) * 100)
            : 0;

        return (
          <StatCard
            key={accessorKey}
            header={header}
            value={statValue}
            progress={progressValue}
          />
        );
      })}

      {/* 지표가 없어 추가 계산이 필요한 부분 */}
      {isPitcher && (
        <>
          <StatCard
            header="이닝"
            value={(data as PitcherSeasonSummaryBase).innDisplay}
            progress={
              maxStats.inn2 > 0
                ? Math.round(
                    (Number((data as PitcherSeasonSummaryBase).inn2) /
                      maxStats.inn2) *
                      100
                  )
                : 0
            }
          />
          <StatCard
            header="IP/G"
            value={ipg}
            progress={
              maxStats.ipg > 0 ? Math.round((ipg / maxStats.ipg) * 100) : 0
            }
          />
        </>
      )}
    </div>
  );
}

export { SeasonSummary };
