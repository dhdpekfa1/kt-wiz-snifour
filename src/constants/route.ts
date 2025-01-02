import { match } from 'path-to-regexp';

// api routes: api 요청 경로 (TODO: api 요청 경로 업데이트)
export enum ApiRoutes {
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
}

// 현재 경로의 페이지가 존재하는지 확인하는 함수
export const isExistPage = (pathname: string) => {
  return Object.values(PageRoutes).some((route) => match(route)(pathname));
};
