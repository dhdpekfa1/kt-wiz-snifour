import { match } from 'path-to-regexp';

// api routes: api 요청 경로 (TODO: api 요청 경로 업데이트)
export enum ApiRoutes {
  /* 랭킹 */
  teamRank = '/game/teamrankbyyear',
  teamRankByPitcher = '/game/rank/pitching',
  teamRankByBatter = '/game/rank/batting',
  teamVs = '/game/rank/teamvs',
  PitcherEraTop3 = '/game/rank/pitcher/era/top3',
  PitcherWinTop3 = '/game/rank/pitcher/win/top3',
  KtPitcherRank = '/game/rank/kt/pitcher',
  AllPitcherRank = '/game/rank/total/pitcher',
  BatterHraTop3 = '/game/rank/batter/hra/top3',
  BatterHrTop3 = '/game/rank/batter/hr/top3',
  KTBatterRank = '/game/rank/kt/batter',
  AllBatterRank = '/game/rank/total/batter',
  CrowdRank = '/game/rank/crowd',

  /* 플레이어 */
  CoachList = '/player/coachlist',
  CoachDetail = '/player/coachdetail',
  PitcherList = '/player/pitcherlist',
  PitcherDetail = '/player/pitcherdetail',
  CatcherList = '/player/catcherlist',
  CatcherDetail = '/player/catcherdetail',
  InfielderList = '/player/infielderlist',
  InfielderDetail = '/player/infielderdetail',
  OutfielderList = '/player/outfielderlist',
  OutfielderDetail = '/player/outfielderdetail',

  /* 미디어 */
  News = '/article/newslistpage',
  NewsDetail = '/article/newsdetail',
  Press = '/article/wizpresslistpage',
  PressDetail = '/article/wizpressdetail',
  Highlight = '/article/wizhighlightlistpage',
  HighlightDetail = '/article/wizhighlightdetail',
  Story = '/article/wizstorylistpage',
  StoryDetail = '/article/wizstorydetail',
  FirstPitch = '/article/wizfirstpitchlistpage',
  FirstPitchDetail = '/article/wizfirstpitchdetail',
  GamePhoto = '/article/wizphotolist1page',
  TrainingPhoto = '/article/wizphotolist2page',
  EventPhoto = '/article/wizphotolist3page',
  GameSchedule = '/game/monthschedule',
  AllGameSchedule = '/game/allgameschedule',
  TodayGameSchedule = '/game/dayschedule',
  RecentGameSchedule = '/game/recentGames',
}

// page routes: 페이지 경로 (TODO: 페이지 경로 업데이트)
export enum PageRoutes {
  Home = '/',
  News = '/media/wiznews',
  NewsDetail = '/media/wiznews/:id',
  Press = '/media/wizpress',
  PressDetail = '/media/wizpress/:id',
  Highlight = '/media/highlight',
  HighlightDetail = '/media/highlight/:id',
  Story = '/media/wizstory',
  StoryDetail = '/media/wizstory/:id',
  FirstPitch = '/media/firstpitch',
  FirstPitchDetail = '/media/firstpitch/:id',
  GamePhoto = '/media/photos/1',
  TrainingPhoto = '/media/photos/2',
  EventPhoto = '/media/photos/3',
  GameSchedule = '/game/regular/schedule',
}

// 현재 경로의 페이지가 존재하는지 확인하는 함수
export const isExistPage = (pathname: string) => {
  return Object.values(PageRoutes).some((route) => match(route)(pathname));
};
