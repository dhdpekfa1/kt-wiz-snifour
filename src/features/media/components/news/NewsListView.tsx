import { cn } from '@/lib/utils';

import { LoadingView } from '@/features/media/common/LoadingView';
import { ListArticleSkeleton } from '@/features/media/common/skeleton';
import { usePagination } from '@/features/media/hooks/usePagination';

import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';
import Pagination from '@/features/media/common/Pagination';
import useNewsListQuery from '../../hooks/news/useNewsListQuery';
import NewsList from './NewsList';

const NewsListView = () => {
  const { pageNum, itemCount, onPagination } = usePagination();
  const { newsList, isSuccess, isLoading, isError } = useNewsListQuery();
  const total = newsList?.list[0]?.totalPage;

  if (!isLoading && isSuccess && !newsList?.list?.length) {
    return <NotFoundSearchResult />;
  }

  return (
    <div className={cn('min-h-[2200px]')}>
      <LoadingView
        isLoading={isLoading}
        isError={isError}
        fallback={<ListArticleSkeleton />}
      >
        <NewsList news={newsList?.list || []} />
        <Pagination
          currentPage={pageNum}
          limit={itemCount}
          total={total || 0}
          onChange={(page) => onPagination({ pageNum: page.toString() })}
          className="mt-14"
        />
      </LoadingView>
    </div>
  );
};

export default NewsListView;
