import { useTabFromUrl } from '@/assets/hooks/useTabFromUrl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import Banner from '@/features/common/Banner';
import { cn } from '@/lib/utils';

import Layout from '@/features/common/Layout';
import {
  BoxScoreTab,
  MatchScheduleTab,
  RankingTab,
  WatchPointTab,
} from '@/features/game';

import '@/features/game/css/game.css';

const REG_TABS_CONFIG = [
  { value: 'schedule', path: '/regular/schedule' },
  { value: 'boxscore', path: '/regular/boxscore' },
  { value: 'ranking', path: '/regular/ranking/team' },
  { value: 'watchpoint', path: '/regular/watchpoint' },
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
      <Tabs
        className="container"
        defaultValue={currentTab}
        onValueChange={handleTabChange}
      >
        <div className={cn('header')}>
          {/* 탭 */}
          <div className="tabs-wrapper">
            <TabsList className="tabs-list">
              <TabsTrigger
                value="schedule"
                onClick={() => handleTabChange('schedule')}
                className={cn('tabs-trigger', 'px-6 py-2.5')}
              >
                경기 일정
              </TabsTrigger>
              <TabsTrigger
                value="boxscore"
                onClick={() => handleTabChange('boxscore')}
                className={cn('tabs-trigger', 'px-6 py-2.5')}
              >
                박스 스코어
              </TabsTrigger>
              <TabsTrigger
                value="ranking"
                onClick={() => handleTabChange('ranking')}
                className={cn('tabs-trigger', 'px-6 py-2.5')}
              >
                순위 기록
              </TabsTrigger>
              <TabsTrigger
                value="watchpoint"
                onClick={() => handleTabChange('watchpoint')}
                className={cn('tabs-trigger', 'px-6 py-2.5')}
              >
                관전 포인트
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        {/* 탭 컨텐츠 */}
        <TabsContent value="schedule">
          <MatchScheduleTab />
        </TabsContent>
        <TabsContent value="boxscore">
          <BoxScoreTab />
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
