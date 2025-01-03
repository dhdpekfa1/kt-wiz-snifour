import { Tabs, TabsContent, TabsList } from '@/components/ui';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';
import { PlayerRecordChart } from './PlayerRecordChart';
import { usePlayerStore } from '@/store/usePlayerStore';
import { useParams } from 'react-router';
import {
  recentBatterConfig,
  recentPitcherConfig,
} from '@/constants/chart-config';

function RecentRecordTab() {
  const { player, loading } = usePlayerStore();
  const { position } = useParams();

  if (!player) {
    return null;
  }

  return (
    <div className="w-full bg-wiz-white bg-opacity-10 rounded-xl px-4 pb-4">
      <Tabs defaultValue="regular">
        <TabsList>
          <SubTabsTrigger value="regular">정규 리그</SubTabsTrigger>
          <SubTabsTrigger value="futures">퓨처스 리그</SubTabsTrigger>
        </TabsList>
        <TabsContent value="regular">
          <PlayerRecordChart
            title={'정규 리그 최근 5경기'}
            data={player.recentgamerecordlist}
            config={
              position === 'pitcher' ? recentPitcherConfig : recentBatterConfig
            }
            loading={loading}
          />
        </TabsContent>
        <TabsContent value="futures">
          <PlayerRecordChart
            title={'퓨처스 리그 최근 5경기'}
            data={player.recentgamerecordlistfutures}
            config={
              position === 'pitcher' ? recentPitcherConfig : recentBatterConfig
            }
            loading={loading}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { RecentRecordTab };
