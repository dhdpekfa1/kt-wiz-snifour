import { cn } from '@/lib/utils';
import { QueryParser } from '@/lib';
import { useSearchParams } from 'react-router';
import { usePagination } from '@/features/media/hooks/usePagination';
import { useGetNewsList } from '@/features/media/apis/NewsApi.query';

import NewsList from './NewsList';
import Pagination from '@/features/media/common/Pagination';
import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';

const NewsListView = () => {
  const [searchParams] = useSearchParams();
  const { pageNum, itemCount, onPagination } = usePagination();
  const { data: newsListByPage, isLoading: newsListIsLoading } = useGetNewsList(
    {
      variables: {
        pageNum: pageNum.toString(),
        itemCount: itemCount.toString(),
        searchWord: QueryParser.toString(searchParams.get('searchWord')) ?? '',
      },
    }
  );

  if (newsListByPage?.list?.length === 0) {
    return <NotFoundSearchResult />;
  }

  return (
    <div className={cn('min-height')}>
      {/* 컨텐츠 */}
      <NewsList
        news={newsListByPage?.list || []}
        isLoading={newsListIsLoading}
      />
      {/* 페이지네이션 */}
      <Pagination
        currentPage={pageNum}
        limit={itemCount}
        total={99}
        onChange={(page) => onPagination({ pageNum: page.toString() })}
        className="mt-14"
      />
    </div>
  );
};

export default NewsListView;
