import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import Banner from '@/features/common/Banner';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';
import { cn } from '@/lib/utils';

import Layout from '@/features/common/Layout';
import {
  BoxScoreTab,
  MatchScheduleTab,
  RankingTab,
  WatchPointTab,
} from '@/features/game';

import '@/features/game/css/game.css';
import { useParams } from 'react-router';

const REG_TABS_CONFIG = [
  { value: 'schedule', path: '/regular/schedule' },
  { value: 'boxscore', path: '/regular/boxscore' },
  { value: 'ranking', path: '/regular/ranking' },
  { value: 'watchpoint', path: '/regular/watchPoint' },
];

/** 정규리그 페이지 */
function RegularGamePage() {
  const { gameDate, gameKey } = useParams();

  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/game',
    tabs: REG_TABS_CONFIG,
    defaultTab: 'schedule',
  });

  const boxScoreProps = {
    gameDate: gameDate,
    gameKey: gameKey,
  };

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
        <div className={cn('')}>
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
        </div>
        {/* 탭 컨텐츠 */}
        <TabsContent value="schedule">
          <MatchScheduleTab />
        </TabsContent>
        <TabsContent value="boxscore">
          <BoxScoreTab {...boxScoreProps} />
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
