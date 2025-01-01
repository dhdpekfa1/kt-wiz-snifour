import ListArticle from '@/features/media/common/ListArticle';
import { usePagination } from '@/features/media/hooks/usePagination';
import useFirstPitchListQuery from '../../hooks/firstPitch/useFirstPitchListQuery';
import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';
import { cn } from '@/lib/utils';
import { LoadingView } from '../../common/LoadingView';
import { ListArticleSkeleton } from '../../common/skeleton';
import PaginationList from '../../common/PaginationList';

const FirstPitchListView = () => {
  const { pageNum, itemCount, onPagination } = usePagination();
  const { firstPitchList, isSuccess, isLoading, isError } =
    useFirstPitchListQuery();

  const total = firstPitchList?.list[0]?.totalPage;

  if (!isLoading && isSuccess && !firstPitchList?.list?.length) {
    return <NotFoundSearchResult />;
  }

  return (
    <>
      <div className={cn('min-h-[2200px]')}>
        <LoadingView
          isLoading={isLoading}
          isError={isError}
          fallback={<ListArticleSkeleton />}
        >
          {/* 시구자 정보 컨텐츠 */}
          {firstPitchList?.list.map(
            ({
              artcSeq,
              imgFilePath,
              title,
              content,
              viewCount,
              createdAt,
            }) => (
              <ListArticle key={artcSeq} link={`/media/firstpitch/${artcSeq}`}>
                <ListArticle.Thumbnail
                  imgFilePath={imgFilePath}
                  title={title}
                />
                <ListArticle.Content>
                  <ListArticle.Title title={title} />
                  <ListArticle.Description content={content} />
                  <ListArticle.Footer
                    createdAt={createdAt}
                    viewCount={viewCount}
                  />
                </ListArticle.Content>
              </ListArticle>
            )
          )}
          <PaginationList
            currentPage={pageNum}
            limit={itemCount}
            total={total || 0}
            onChange={(page) => onPagination({ pageNum: page.toString() })}
            className="mt-14"
          />
        </LoadingView>
      </div>
    </>
  );
};

export default FirstPitchListView;
