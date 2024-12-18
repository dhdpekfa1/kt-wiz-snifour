import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import { PlayerProfile, PlayerRecordChart } from '@/features/player/components';
import { data } from '@/assets/data/__test__/pitcher/엄상백.json';

function PlayerDetailPage() {
  console.log(data);
  return (
    <div className="my-20 text-white">
      <Breadcrumb />

      <div className="w-full flex flex-col items-center gap-8 bg-wiz-white bg-opacity-10 rounded-xl p-8 mt-12">
        {/* 대시보드 */}
        <div className="w-full flex gap-8">
          {/* 프로필 */}
          <PlayerProfile
            player={data.gameplayer}
            seasonSummary={data.seasonsummary}
          />
          {/* 경기 기록 */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <PlayerRecordChart
              title="최근 5경기"
              data={data.recentgamerecordlist}
            />
            <PlayerRecordChart title="통산 기록" data={data.yearrecordlist} />
          </div>
        </div>
        {/* 표 */}
        <div className="w-full">
          <SubTitle title="정규 리그 기록" />
        </div>
      </div>
    </div>
  );
}

export default PlayerDetailPage;
