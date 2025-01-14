import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { Banner, Layout } from '@/features/common';
import {
  BoxscoreTab,
  MatchScheduleTab,
  RankingTab,
  WatchPointTab,
} from '@/features/game';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';

import '@/features/game/css/game.css';

const REG_TABS_CONFIG = [
  { value: 'schedule', path: '/regular/schedule' },
  {
    value: 'boxscore',
    paths: ['/regular/boxscore', '/regular/boxscore/:gameDate/:gameKey'],
  },
  { value: 'ranking', path: '/regular/ranking' },
  { value: 'watchpoint', path: '/regular/watchPoint' },
];

/** 정규리그 페이지 */
function RegularGamePage() {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/game',
    tabs: REG_TABS_CONFIG,
    defaultTab: 'schedule',
  });

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=WIZ+GAMES"
            alt="KT WIZ GAMES"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="정규 리그"
              subtitle="KT WIZ의 정규리그 경기 일정"
            />
            <Banner.Description description="" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Tabs defaultValue={currentTab} onValueChange={handleTabChange}>
        {/* 탭 */}
        <div>
          <TabsList>
            <TabsTrigger
              value="schedule"
              onClick={() => handleTabChange('schedule')}
            >
              경기 일정
            </TabsTrigger>
            <TabsTrigger
              value="boxscore"
              onClick={() => handleTabChange('boxscore')}
            >
              박스 스코어
            </TabsTrigger>
            <TabsTrigger
              value="ranking"
              onClick={() => handleTabChange('ranking')}
            >
              순위 기록
            </TabsTrigger>
            <TabsTrigger
              value="watchpoint"
              onClick={() => handleTabChange('watchpoint')}
            >
              관전 포인트
            </TabsTrigger>
          </TabsList>
        </div>
        {/* 탭 컨텐츠 */}
        <TabsContent value="schedule">
          <MatchScheduleTab />
        </TabsContent>
        <TabsContent value="boxscore">
          <BoxscoreTab />
        </TabsContent>
        <TabsContent value="ranking">
          <RankingTab />
        </TabsContent>
        <TabsContent value="watchpoint">
          <WatchPointTab />
        </TabsContent>
      </Tabs>
    </Layout>
  );
}

export default RegularGamePage;
