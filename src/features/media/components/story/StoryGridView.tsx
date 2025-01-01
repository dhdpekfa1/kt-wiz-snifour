import { useNavigate } from 'react-router';
import { cn } from '@/lib/utils';

import GridArticle from '@/features/media/common/GridArticle';
import PlayButton from '@/features/media/common/PlayButton';
import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';
import { GridArticleSkeleton } from '../../common/skeleton';
import { LoadingView } from '../../common/LoadingView';
import useStoryListQuery from '../../hooks/useStoryListQuery';

const StoryGridView = () => {
  const navigate = useNavigate();
  const { storyList, isLoading, isError, isSuccess } = useStoryListQuery();

  if (!isLoading && isSuccess && !storyList?.list?.length) {
    return <NotFoundSearchResult />;
  }

  return (
    <LoadingView
      isLoading={isLoading}
      isError={isError}
      fallback={<GridArticleSkeleton />}
    >
      <div className={cn('media-grid')}>
        {storyList?.list?.map(
          ({ artcSeq, imgFilePath, title, contentsDate }) => (
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
          )
        )}
      </div>
    </LoadingView>
  );
};

export default StoryGridView;
