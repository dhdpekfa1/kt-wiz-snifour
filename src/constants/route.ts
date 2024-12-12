import { match } from 'path-to-regexp';

export enum ApiRoutes {
  News = 'api/article/newslistpage',
  NewsDetail = 'api/article/newsdetail',
  Press = 'api/article/wizpresslistpage',
  PressDetail = 'api/article/wizpressdetail',
}

export enum PageRoutes {
  Home = '/',
  News = '/media/wiznews',
  NewsDetail = '/media/wiznews/:id',
  Press = '/media/wizpress',
  PressDetail = '/media/wizpress/:id',
}

export const isExistPage = (pathname: string) => {
  return Object.values(PageRoutes).some((route) => match(route)(pathname));
};
