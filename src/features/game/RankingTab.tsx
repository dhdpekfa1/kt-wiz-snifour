import { useTabFromUrl } from '@/assets/hooks/useTabFromUrl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import {
  BatterRankingTab,
  CrowdRankingTab,
  PitcherRankingTab,
  TeamRankingTab,
} from '@/features/game';

const REG_TABS_CONFIG = [
  { value: 'team', path: '/ranking/team' },
  { value: 'pitcher', path: '/ranking/pitcher' },
  { value: 'batter', path: '/ranking/batter' },
  { value: 'crowd', path: '/ranking/crowd' },
];

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
          <TabsTrigger
            value="team"
            onClick={() => handleTabChange('team')}
            className="border-b-2 border-b-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-wiz-red px-6 py-2.5"
          >
            팀 순위
          </TabsTrigger>
          <TabsTrigger
            value="pitcher"
            onClick={() => handleTabChange('pitcher')}
            className="border-b-2 border-b-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-wiz-red px-6 py-2.5"
          >
            투수 순위
          </TabsTrigger>
          <TabsTrigger
            value="batter"
            onClick={() => handleTabChange('batter')}
            className="border-b-2 border-b-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-wiz-red px-6 py-2.5"
          >
            타자 순위
          </TabsTrigger>
          <TabsTrigger
            value="crowd"
            onClick={() => handleTabChange('crowd')}
            className="border-b-2 border-b-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-wiz-red px-6 py-2.5"
          >
            관중 현황
          </TabsTrigger>
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
