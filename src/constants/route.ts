import { match } from 'path-to-regexp';

export enum ApiRoutes {
  News = 'article/newslistpage',
  NewsDetail = 'article/newsdetail',
  Press = 'article/wizpresslistpage',
  PressDetail = 'article/wizpressdetail',
  Highlight = 'media/highlightlist',
}

export enum PageRoutes {
  Home = '/',
  News = '/media/wiznews',
  NewsDetail = '/media/wiznews/:id',
  Press = '/media/wizpress',
  PressDetail = '/media/wizpress/:id',
  Highlight = '/media/highlight',
}

export const isExistPage = (pathname: string) => {
  return Object.values(PageRoutes).some((route) => match(route)(pathname));
};
