import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router';

import GridArticle from '@/features/media/common/GridArticle';
import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';
import PlayButton from '@/features/media/common/PlayButton';
import InfiniteScroll from 'react-infinite-scroller';
import { LoadingView } from '../../common/LoadingView';
import { GridArticleSkeleton } from '../../common/skeleton';
import useStoryListQuery from '../../hooks/story/useStoryListQuery';

const StoryGridView = () => {
  const navigate = useNavigate();
  const {
    storyList,
    isLoading,
    isError,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  } = useStoryListQuery();

  if (!isLoading && isSuccess && !storyList?.pages?.[0]?.length) {
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
          {storyList?.pages?.map((page) =>
            page.map(({ artcSeq, imgFilePath, title, contentsDate }) => (
              <GridArticle
                key={artcSeq}
                className="cursor-pointer"
                onClick={() => navigate(`/media/wizstory/${artcSeq}`)}
              >
                <GridArticle.Media>
                  <GridArticle.Thumbnail
                    imgFilePath={imgFilePath}
                    title={title}
                  />
                  <GridArticle.Overlay elements={<PlayButton />} />
                </GridArticle.Media>
                <GridArticle.Title title={title} />
                <GridArticle.Footer date={contentsDate} />
              </GridArticle>
            ))
          )}
        </LoadingView>
      </div>
    </InfiniteScroll>
  );
};

export default StoryGridView;
