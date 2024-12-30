import { useParams, useSearchParams } from 'react-router';

import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  PlayerProfile,
  PlayerRecordChart,
  SeasonSummary,
} from '@/features/player/components';
import {
  recentPitcherConfig,
  yearPitcherConfig,
} from '@/constants/chart-config';
import { usePlayer } from '@/features/player/hooks/usePlayer';
import { cn } from '@/lib/utils';

function PlayerDetailPage() {
  const { position } = useParams();
  const [searchParams] = useSearchParams();
  const pcode = searchParams.get('pcode');

  const { player, error } = usePlayer(position, pcode);

  if (!player) {
    return <div>선수 정보가 없습니다.</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={cn('text-white', 'md:my-10', 'lg:my-20')}>
      <Breadcrumb />

      <div
        className={cn(
          'w-full flex flex-col items-center gap-8 rounded-xl',
          'md:mt-4',
          'lg:mt-6'
        )}
      >
        {/* 대시보드 */}
        <div className={cn('w-full flex flex-col gap-8', 'lg:flex-row')}>
          {/* 프로필 */}
          <PlayerProfile
            player={player.gameplayer}
            seasonSummary={player.seasonsummary}
          />
          {/* 경기 기록 */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <PlayerRecordChart
              title={
                player.recentgamerecordlist.length > 0
                  ? '정규 리그 최근 5경기'
                  : '퓨처스 리그 최근 5경기'
              }
              data={
                player.recentgamerecordlist.length > 0
                  ? player.recentgamerecordlist
                  : player.recentgamerecordlistfutures
              }
              config={recentPitcherConfig}
            />
            <PlayerRecordChart
              title="정규 리그 통산 기록"
              data={player.yearrecordlist}
              config={yearPitcherConfig}
            />
          </div>
        </div>
        {/* 표 */}
        <div className="w-full">
          <SubTitle title="정규 리그 기록" />
          <p className="text-sm text-neutral-400 my-1">
            팀 대비 비교 성적입니다.
          </p>
          <SeasonSummary data={player.seasonsummary} />
        </div>
      </div>
    </div>
  );
}

export default PlayerDetailPage;
