import { ApiRoutes, PageRoutes } from '@/constants/route';
import { compile } from 'path-to-regexp';

// URL 생성 유틸리티 함수 (URL 경로에 포함되는 동적 파라미터 처리)
export const toUrl = (path: PageRoutes | ApiRoutes, params?: object) =>
  compile(path, { encode: encodeURIComponent })(params);
