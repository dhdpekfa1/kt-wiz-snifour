import { match } from 'path-to-regexp';

export enum ApiRoutes {
  News = 'api/article/newslist',
  NewsDetail = 'api/article/newsdetail',
}

export enum PageRoutes {
  Home = '/',
  Media = '/media',
}

export const isExistPage = (pathname: string) => {
  return Object.values(PageRoutes).some((route) => match(route)(pathname));
};
