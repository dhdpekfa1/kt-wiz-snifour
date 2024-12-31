import { useNavigate, useSearchParams } from 'react-router';

import { useGetHighlightList } from '@/features/media/apis/highlight/HighlightApi.query';
import GridArticle from '@/features/media/common/GridArticle';
import { LoadingView } from '@/features/media/common/LoadingView';
import PlayButton from '@/features/media/common/PlayButton';
import { GridArticleSkeleton } from '@/features/media/common/skeleton';
import { cn } from '@/lib/utils';

const HighlightGridView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, isLoading, isError } = useGetHighlightList({
    variables: {
      searchWord: searchParams.get('searchWord') || '',
      itemCount: 12,
      pageNum: 1,
    },
  });

  return (
    <>
      <div className={cn('media-grid')}>
        <LoadingView
          isLoading={isLoading}
          isError={isError}
          fallback={<GridArticleSkeleton />}
        >
          {data?.list?.map(
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
