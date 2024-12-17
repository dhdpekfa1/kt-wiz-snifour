import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useState } from 'react';
import PlayButton from '@/features/media/common/PlayButton';
import GridArticle from '@/features/media/common/GridArticle';
import { LoadingView } from '@/features/media/common/LoadingView';
import { GridArticleSkeleton } from '@/features/media/common/skeleton';
import { useGetHighlightList } from '@/features/media/apis/highlight/HighlightApi.query';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

const API_URL = 'https://www.ktwiz.co.kr';

const HighlightGridView = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { data, isLoading, isError } = useGetHighlightList({
    variables: { count: '10' },
  });

  const selectedHighlight = data?.list.find(
    (item) => item.artcSeq === selectedId
  );

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
              <GridArticle key={artcSeq} className="cursor-pointer">
                <GridArticle.Media onClick={() => setSelectedId(artcSeq)}>
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

      <Dialog
        open={selectedId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedId(null);
            setIsPlaying(false);
          }
        }}
      >
        <DialogContent className="w-screen h-screen max-w-none p-0 bg-black/95">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 hover:opacity-100">
            <X className="h-8 w-8 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {selectedHighlight && (
            <div className="h-full flex items-center justify-center">
              <div className="relative max-w-5xl w-full mx-8">
                {isPlaying ? (
                  <GridArticle.Video
                    src={`${API_URL}/${selectedHighlight.videoLink}`}
                    poster={selectedHighlight.imgFilePath}
                  />
                ) : (
                  <GridArticle.Media onClick={() => setIsPlaying(true)}>
                    <GridArticle.Thumbnail
                      imgFilePath={selectedHighlight.imgFilePath}
                      title={selectedHighlight.title}
                    />
                    <PlayButton className="absolute left-4 bottom-4" />
                  </GridArticle.Media>
                )}

                <DialogHeader className="gap-2 mt-4">
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedHighlight.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-white/50">
                    {selectedHighlight.contentsDate}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HighlightGridView;
