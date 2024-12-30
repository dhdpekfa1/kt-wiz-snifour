import { useGetNewsList } from '@/features/media/apis/news/NewsApi.query';
import { useGetPressList } from '@/features/media/apis/news/PressApi.query';
import { QueryParser } from '@/lib';
import { useMemo } from 'react';

import { useTabFromUrl } from '@/hooks/useTabFromUrl';
import { NEWS_TABS_CONFIG } from '@/pages/media/News';
import { useSearchParams } from 'react-router';
import { usePagination } from './usePagination';

const useNewsListQuery = () => {
  const { currentTab } = useTabFromUrl({
    basePath: '/media',
    tabs: NEWS_TABS_CONFIG,
    defaultTab: NEWS_TABS_CONFIG[0].value,
  });

  const [searchParams] = useSearchParams();
  const { pageNum, itemCount } = usePagination();

  const variables = {
    pageNum: pageNum.toString(),
    itemCount: itemCount.toString(),
    searchWord: QueryParser.toString(searchParams.get('searchWord')) ?? '',
  };

  // 뉴스 리스트 조회
  const newsListQuery = useGetNewsList({
    variables,
    options: {
      enabled: currentTab === NEWS_TABS_CONFIG[0].value,
    },
  });

  // 보도자료 리스트 조회
  const PressListQuery = useGetPressList({
    variables,
    options: {
      enabled: currentTab === NEWS_TABS_CONFIG[1].value,
    },
  });

  const isLoading = useMemo(() => {
    switch (currentTab) {
      case NEWS_TABS_CONFIG[0].value:
        return newsListQuery.isLoading;
      case NEWS_TABS_CONFIG[1].value:
        return PressListQuery.isLoading;
      default:
        throw new Error('invalid tab');
    }
  }, [newsListQuery.isLoading, PressListQuery.isLoading, currentTab]);

  const isSuccess = useMemo(() => {
    switch (currentTab) {
      case NEWS_TABS_CONFIG[0].value:
        return newsListQuery.isSuccess;
      case NEWS_TABS_CONFIG[1].value:
        return PressListQuery.isSuccess;
      default:
        throw new Error('invalid tab');
    }
  }, [newsListQuery.isSuccess, PressListQuery.isSuccess, currentTab]);

  const isError = useMemo(() => {
    switch (currentTab) {
      case NEWS_TABS_CONFIG[0].value:
        return newsListQuery.isError;
      case NEWS_TABS_CONFIG[1].value:
        return PressListQuery.isError;
      default:
        throw new Error('invalid tab');
    }
  }, [newsListQuery.isError, PressListQuery.isError, currentTab]);

  const newsList = useMemo(() => {
    switch (currentTab) {
      case NEWS_TABS_CONFIG[0].value:
        return newsListQuery.data;
      case NEWS_TABS_CONFIG[1].value:
        return PressListQuery.data;
      default:
        throw new Error('invalid tab');
    }
  }, [newsListQuery.data, PressListQuery.data, currentTab]);

  return { newsList, isLoading, isSuccess, isError };
};

export default useNewsListQuery;
