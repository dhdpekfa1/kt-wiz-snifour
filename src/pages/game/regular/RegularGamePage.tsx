import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { Banner, Layout } from '@/features/common';
import {
  BoxscoreTab,
  MatchScheduleTab,
  RankingTab,
  WatchPointTab,
} from '@/features/game';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';

import SEO from '@/components/SEO';
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

  // value에 따라 subtitle 설정
  let subtitle = 'KT WIZ 정규 리그';
  switch (currentTab) {
    case 'schedule':
      subtitle = 'KT WIZ 정규리그 경기 일정';
      break;
    case 'boxscore':
      subtitle = '박스 스코어 정보';
      break;
    case 'ranking':
      subtitle = 'KT WIZ 정규리그 기록';
      break;
    case 'watchpoint':
      subtitle = '경기 관전 포인트';
      break;
    default:
      subtitle = 'KT WIZ 정규 리그';
  }

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=WIZ+GAMES"
            alt="KT WIZ GAMES"
          />
          <Banner.Overlay>
            <Banner.Heading title="정규 리그" subtitle={subtitle} />
            <Banner.Description description="" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <SEO
        title="kt wiz 정규리그 페이지"
        description="kt wiz 선수단의 정규리그 경기 일정을 확인하세요."
        keywords="ktwiz, 야구, 경기 일정, 박스스코어, 순위기록, 관전포인트"
      />
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
