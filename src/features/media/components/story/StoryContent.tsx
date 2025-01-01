import { useSearchParams } from 'react-router';
import { cn } from '@/lib/utils';

import GridArticle from '@/features/media/common/GridArticle';
import PlayButton from '@/features/media/common/PlayButton';
import { useGetStoryList } from '../../apis/story/StoryApi.query';
import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';
import { GridArticleSkeleton } from '../../common/skeleton';
import { LoadingView } from '../../common/LoadingView';

const StoryContent = () => {
  const [searchParams] = useSearchParams();
  const {
    data: storyList,
    isLoading,
    isError,
    isSuccess,
  } = useGetStoryList({
    variables: {
      searchWord: searchParams.get('searchWord') || '',
      itemCount: 12,
      pageNum: 1,
    },
  });

  if (!isLoading && isSuccess && !storyList?.list?.length) {
    return <NotFoundSearchResult />;
  }

  return (
    <>
      {/* 스토리 컨텐츠 */}
      <LoadingView
        isLoading={isLoading}
        isError={isError}
        fallback={<GridArticleSkeleton />}
      >
        <div className={cn('media-grid')}>
          {storyList?.list?.map(
            ({ artcSeq, imgFilePath, title, contentsDate }) => (
              <GridArticle key={artcSeq} className="cursor-pointer">
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
            )
          )}
        </div>
      </LoadingView>

      {/* 페이지네이션 */}
    </>
  );
};

export default StoryContent;
