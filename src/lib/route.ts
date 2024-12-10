import { ApiRoutes, PageRoutes } from '@/constants/route';
import { compile } from 'path-to-regexp';

export const toUrl = (path: PageRoutes | ApiRoutes, params?: object) =>
  compile(path, { encode: encodeURIComponent })(params);
