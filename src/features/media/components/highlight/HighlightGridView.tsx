import { useNavigate } from 'react-router';

import GridArticle from '@/features/media/common/GridArticle';
import { LoadingView } from '@/features/media/common/LoadingView';
import PlayButton from '@/features/media/common/PlayButton';
import { GridArticleSkeleton } from '@/features/media/common/skeleton';
import { cn } from '@/lib/utils';
import NotFoundSearchResult from '@/features/media/common/NotFoundSearchResult';
import useHighlightListQuery from '../../hooks/useHighlightListQuery';

const HighlightGridView = () => {
  const navigate = useNavigate();
  const { highlightList, isLoading, isError, isSuccess } =
    useHighlightListQuery();

  if (!isLoading && isSuccess && !highlightList?.list?.length) {
    return <NotFoundSearchResult />;
  }

  return (
    <>
      <div className={cn('media-grid')}>
        <LoadingView
          isLoading={isLoading}
          isError={isError}
          fallback={<GridArticleSkeleton />}
        >
          {highlightList?.list?.map(
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
                <GridArticle.Footer date={contentsDate} viewCount={viewCount} />
              </GridArticle>
            )
          )}
        </LoadingView>
      </div>
    </>
  );
};

export default HighlightGridView;
