import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

import { usePagination } from '@/features/media/hooks/usePagination';
import { storyItems } from '@/features/media/mock_data';

import GridArticle from '@/features/media/common/GridArticle';
import PaginationList from '@/features/media/common/PaginationList';
import PlayButton from '@/features/media/common/PlayButton';

const StoryContent = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedStory = storyItems.find((item) => item.id === selectedId);

  const { pageNum, itemCount, onPagination } = usePagination();

  return (
    <>
      {/* 스토리 컨텐츠 */}
      <div className={cn('media-grid')}>
        {storyItems.map(({ id, thumbnail, title, date }) => (
          <GridArticle key={id} className="cursor-pointer">
            <GridArticle.Media onClick={() => setSelectedId(id)}>
              <GridArticle.Thumbnail imgFilePath={thumbnail} title={title} />
              <GridArticle.Overlay elements={<PlayButton />} />
            </GridArticle.Media>
            <GridArticle.Title title={title} />
            <GridArticle.Footer date={date} />
          </GridArticle>
        ))}
      </div>

      {/* 페이지네이션 */}

      <PaginationList
        currentPage={pageNum}
        total={100}
        limit={itemCount}
        onChange={() => onPagination({ pageNum: '1' })}
        className="mt-14"
      />

      {/* 다이얼로그 */}
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

          {selectedStory && (
            <div className="h-full flex items-center justify-center">
              <div className="relative max-w-5xl w-full mx-8">
                <GridArticle.Media
                  className="mb-0"
                  onClick={() => setIsPlaying(true)}
                >
                  {isPlaying ? (
                    <GridArticle.Video
                      src={''}
                      poster={selectedStory.thumbnail}
                    />
                  ) : (
                    <>
                      <GridArticle.Thumbnail
                        imgFilePath={selectedStory.thumbnail}
                        title={selectedStory.title}
                      />
                      <PlayButton className="absolute left-4 bottom-4" />
                    </>
                  )}
                </GridArticle.Media>

                <DialogHeader className="gap-2 mt-4">
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedStory.title}
                  </DialogTitle>
                  <DialogDescription className="flex flex-col gap-4 text-[#6b7280]">
                    <span className="text-base text-wiz-white">
                      {selectedStory.description}
                    </span>
                    <span>{selectedStory.date}</span>
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

export default StoryContent;
