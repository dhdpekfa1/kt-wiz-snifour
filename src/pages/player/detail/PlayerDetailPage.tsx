import { useParams, useSearchParams } from 'react-router';

import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import { PlayerProfile, PlayerRecordChart } from '@/features/player/components';
import { GameRecord, SeasonSummaryBase } from '@/features/player/types/detail';
import DataTable from '@/features/common/DataTable';
import {
  seasonOneColumns,
  seasonTwoColumns,
} from '@/constants/columns/season-summary-columns';
import {
  recentPitcherConfig,
  yearPitcherConfig,
} from '@/constants/chart-config';
import { usePlayer } from '@/features/player/hooks/usePlayer';

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
    <div className="my-20 text-white">
      <Breadcrumb />

      <div className="w-full flex flex-col items-center gap-8 bg-wiz-white bg-opacity-10 rounded-xl p-8 mt-12">
        {/* 대시보드 */}
        <div className="w-full flex gap-8">
          {/* 프로필 */}
          <PlayerProfile
            player={player.gameplayer}
            seasonSummary={player.seasonsummary}
          />
          {/* 경기 기록 */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <PlayerRecordChart
              title="최근 5경기"
              data={player.recentgamerecordlist as GameRecord[]}
              config={recentPitcherConfig}
            />
            <PlayerRecordChart
              title="통산 기록"
              data={player.yearrecordlist as SeasonSummaryBase[]}
              config={yearPitcherConfig}
            />
          </div>
        </div>
        {/* 표 */}
        <div className="w-full">
          <SubTitle title="정규 리그 기록" />
          <DataTable data={[player.seasonsummary]} columns={seasonOneColumns} />
          <DataTable data={[player.seasonsummary]} columns={seasonTwoColumns} />
        </div>
      </div>
    </div>
  );
}

export default PlayerDetailPage;
