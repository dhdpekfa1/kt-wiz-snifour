import { Tabs, TabsContent, TabsList } from '@/components/ui';
import {
  BatterRankingTab,
  CrowdRankingTab,
  PitcherRankingTab,
  TeamRankingTab,
} from '@/features/game/components/ranking';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';
import SubTabsTrigger from '../common/SubTabsTrigger';

const REG_TABS_CONFIG = [
  { value: 'team', path: '/ranking/team' },
  { value: 'pitcher', path: '/ranking/pitcher' },
  { value: 'batter', path: '/ranking/batter' },
  { value: 'crowd', path: '/ranking/crowd' },
];

/**
 * 문제점 - react query의 캐시에 데이터가 저장된 경우 렌더링 버그
 */

function RankingTab() {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/game/regular',
    tabs: REG_TABS_CONFIG,
    defaultTab: 'team',
  });

  return (
    <div>
      <Tabs defaultValue={currentTab} onValueChange={handleTabChange}>
        <TabsList>
          <SubTabsTrigger value="team">팀 순위</SubTabsTrigger>
          <SubTabsTrigger value="pitcher">투수 순위</SubTabsTrigger>
          <SubTabsTrigger value="batter">타자 순위</SubTabsTrigger>
          <SubTabsTrigger value="crowd">관중 현황</SubTabsTrigger>
        </TabsList>
        <TabsContent value="team">
          <TeamRankingTab />
        </TabsContent>
        <TabsContent value="pitcher">
          <PitcherRankingTab />
        </TabsContent>
        <TabsContent value="batter">
          <BatterRankingTab />
        </TabsContent>
        <TabsContent value="crowd">
          <CrowdRankingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { RankingTab };
