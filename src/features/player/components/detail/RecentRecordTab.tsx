import { Tabs, TabsContent, TabsList } from '@/components/ui';
import {
  recentBatterConfig,
  recentPitcherConfig,
} from '@/constants/chart-config';
import { SubTabsTrigger } from '@/features/common';
import { usePlayer } from '@/features/player/hooks/usePlayer';
import { useParams } from 'react-router';
import { PlayerRecordChart } from './PlayerRecordChart';

import pitcherMockData from '@/assets/data/__test__/pitcher/강건.json';
import batterMockdata from '@/assets/data/__test__/catcher/장성우.json';

function RecentRecordTab() {
  const { player, isLoading } = usePlayer();
  const { position } = useParams();

  if (!player) {
    return null;
  }

  return (
    <div className="w-full bg-wiz-white bg-opacity-10 rounded-xl">
      <Tabs defaultValue="regular">
        <TabsList className="px-4">
          <SubTabsTrigger value="regular" className="text-sm">
            정규 리그
          </SubTabsTrigger>
          <SubTabsTrigger value="futures" className="text-sm">
            퓨처스 리그
          </SubTabsTrigger>
        </TabsList>
        <TabsContent value="regular" className="pb-4">
          <PlayerRecordChart
            title={'정규 리그 최근 5경기'}
            data={
              player.recentgamerecordlist.length > 0
                ? player.recentgamerecordlist
                : position === 'pitcher'
                ? pitcherMockData.data.recentgamerecordlist
                : batterMockdata.data.recentgamerecordlist
            }
            config={
              position === 'pitcher' ? recentPitcherConfig : recentBatterConfig
            }
            loading={isLoading}
            className="bg-opacity-0"
          />
        </TabsContent>
        <TabsContent value="futures" className="pb-4">
          <PlayerRecordChart
            title={'퓨처스 리그 최근 5경기'}
            data={
              player.recentgamerecordlistfutures.length > 0
                ? player.recentgamerecordlistfutures
                : position === 'pitcher'
                ? pitcherMockData.data.recentgamerecordlistfutures
                : batterMockdata.data.recentgamerecordlistfutures
            }
            config={
              position === 'pitcher' ? recentPitcherConfig : recentBatterConfig
            }
            loading={isLoading}
            className="bg-opacity-0"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { RecentRecordTab };
