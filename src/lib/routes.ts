import { ApiRoutes, PageRoutes } from '@/constants/route';
import { compile } from 'path-to-regexp';

/** URL 생성 유틸리티 함수
 * - @example: 동적 경로 `/user/:id`와 파라미터 `{ id: 123 }`를 기반으로 `/user/123` URL 생성
 * - @param path: 경로 문자열 (동적 파라미터가 포함될 수 있음)
 * - @param params: 경로에 대입할 동적 파라미터 객체
 */
export const toUrl = (path: PageRoutes | ApiRoutes, params?: object) =>
  compile(path, { encode: encodeURIComponent })(params);

type QueryValue = string | string[] | null | undefined;

/**
 * URL 쿼리 파라미터를 원하는 타입으로 변환하기 위한 유틸리티 객체
 * - toNumber: URL 쿼리 값을 숫자로 변환합니다.
 * - 예를 들어 '42'는 42로 변환되지만, 'abc'는 undefined를 반환합니다.
 * - toString: URL 쿼리 값을 문자열로 변환합니다.
 * - 예를 들어 'hello'는 그대로 'hello'를 반환하지만, 문자열 배열이나 잘못된 값은 undefined를 반환합니다.
 */
export const QueryParser = {
  toNumber: (query: QueryValue): number | undefined => {
    if (!query || Array.isArray(query)) return undefined;

    const num = Number(query);
    if (Number.isNaN(num)) {
      return undefined;
    }
    return num;
  },

  toString: (query: QueryValue): string | undefined => {
    if (!query || Array.isArray(query)) return undefined;
    return query;
  },
};
