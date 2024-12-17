import { useSearchParams } from 'react-router';
import { useCallback, useMemo } from 'react';
import { isNotNullish, QueryParser } from '@/lib';

type PaginationParams = {
  pageNum?: string;
  itemCount?: string;
};

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 현재 쿼리 파라미터 파싱
  const params = useMemo(() => {
    return {
      pageNum: QueryParser.toNumber(searchParams.get('pageNum')) ?? 1,
      itemCount: QueryParser.toNumber(searchParams.get('itemCount')) ?? 10,
    };
  }, [searchParams]);

  // 페이지네이션 파라미터 업데이트
  const onPagination = useCallback(
    (newParams: Partial<PaginationParams>) => {
      const updatedSearchParams = new URLSearchParams(searchParams);

      for (const [key, value] of Object.entries(newParams)) {
        if (isNotNullish(value)) {
          updatedSearchParams.set(key, value.toString());
        }
      }

      setSearchParams(updatedSearchParams);
    },
    [searchParams, setSearchParams]
  );

  return { ...params, onPagination };
};
