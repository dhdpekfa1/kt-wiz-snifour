import { useParams, useSearchParams } from 'react-router';

import { yearBatterConfig, yearPitcherConfig } from '@/constants/chart-config';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  PlayerProfile,
  PlayerRecordChart,
  SeasonSummary,
} from '@/features/player/components';
import { usePlayer } from '@/features/player/hooks/usePlayer';
import { cn } from '@/lib/utils';
import { RecentRecordTab } from '@/features/player/components/detail/RecentRecordTab';

function PlayerDetailPage() {
  const { position } = useParams();
  const [searchParams] = useSearchParams();
  const pcode = searchParams.get('pcode');

  const { player, loading, error } = usePlayer(position, pcode);

  if (!player) {
    return <div>선수 정보가 없습니다.</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={cn('w-full text-white', 'md:my-10', 'lg:my-20')}>
      <Breadcrumb />

      <div
        className={cn(
          'w-full flex flex-col items-center gap-8 rounded-xl',
          'md:mt-4',
          'lg:mt-6'
        )}
      >
        <div className={cn('w-full flex flex-col gap-8', 'lg:flex-row')}>
          {/* 프로필 */}
          <PlayerProfile className="w-full lg:w-80" />
          {/* 경기 기록 */}
          <div className="w-full flex flex-col items-center gap-4 lg:w-[calc(100%-22rem)]">
            <RecentRecordTab />
            <PlayerRecordChart
              title="정규 리그 통산 기록"
              data={player.yearrecordlist}
              config={
                position === 'pitcher' ? yearPitcherConfig : yearBatterConfig
              }
              loading={loading}
              className="pt-4"
            />
          </div>
        </div>
        {/* 표 */}
        <div className="w-full">
          <SubTitle title="정규 리그 기록" />
          <p className="text-sm text-neutral-400 my-1">
            팀 대비 비교 성적입니다.
          </p>
          <SeasonSummary />
        </div>
      </div>
    </div>
  );
}

export default PlayerDetailPage;
