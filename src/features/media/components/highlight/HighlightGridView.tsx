import { useNavigate } from 'react-router';
import InfiniteScroll from 'react-infinite-scroller';

import GridArticle from '@/features/media/common/GridArticle';
import { LoadingView } from '@/features/media/common/LoadingView';
import PlayButton from '@/features/media/common/PlayButton';
import { GridArticleSkeleton } from '@/features/media/common/skeleton';
import { cn } from '@/lib/utils';
import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';
import useHighlightListQuery from '../../hooks/highlight/useHighlightListQuery';

const HighlightGridView = () => {
  const navigate = useNavigate();
  const {
    highlightList,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
  } = useHighlightListQuery();

  console.log({ highlightList });

  if (!isLoading && isSuccess && !highlightList?.pages?.length) {
    return <NotFoundSearchResult />;
  }

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={handleLoadMore}>
      <div className={cn('media-grid')}>
        <LoadingView
          isLoading={isLoading}
          isError={isError}
          fallback={<GridArticleSkeleton />}
        >
          {highlightList?.pages?.map((page) =>
            page.map(
              ({ artcSeq, imgFilePath, title, contentsDate, viewCount }) => (
                <GridArticle
                  key={artcSeq}
                  onClick={() => {
                    navigate(`/media/highlight/${artcSeq}`);
                  }}
                  className="cursor-pointer"
                >
                  <GridArticle.Media>
                    <GridArticle.Thumbnail
                      imgFilePath={imgFilePath}
                      title={title}
                    />
                    <GridArticle.Overlay elements={<PlayButton />} />
                  </GridArticle.Media>
                  <GridArticle.Title title={title} />
                  <GridArticle.Footer
                    date={contentsDate}
                    viewCount={viewCount}
                  />
                </GridArticle>
              )
            )
          )}
        </LoadingView>
      </div>
    </InfiniteScroll>
  );
};

export default HighlightGridView;
