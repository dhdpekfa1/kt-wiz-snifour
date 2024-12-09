import ListArticle from '@/features/media/common/ListArticle';
import PlayButton from '@/features/media/common/PlayButton';
import { storyItems as highlightItems } from '@/features/media/mock_data';
import { cn } from '@/lib/utils';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import PaginationWithThemeRed from '@/features/media/common/PaginationWithThemeRed';
import { usePagination } from '@/features/media/hooks/usePagination';
import { X } from 'lucide-react';
import { useState } from 'react';

const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 (임시)
const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const HighlightContent = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedHighlight = highlightItems.find(
    (item) => item.id === selectedId
  );

  const { currentPage, setCurrentPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <>
      <div className={cn('media-list-grid')}>
        {highlightItems.map(({ id, thumbnail, title, date }) => (
          <ListArticle key={id} className="cursor-pointer">
            <ListArticle.Media onClick={() => setSelectedId(id)}>
              <ListArticle.Thumbnail thumbnail={thumbnail} title={title} />
              <ListArticle.Overlay elements={<PlayButton />} />
            </ListArticle.Media>
            <ListArticle.Title title={title} />
            <ListArticle.Footer date={date} />
          </ListArticle>
        ))}
      </div>

      <PaginationWithThemeRed
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        className="mt-14"
      />

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
                <ListArticle.Media
                  className="mb-0"
                  onClick={() => setIsPlaying(true)}
                >
                  {isPlaying ? (
                    <ListArticle.Video
                      src={''}
                      poster={selectedHighlight.thumbnail}
                    />
                  ) : (
                    <>
                      <ListArticle.Thumbnail
                        thumbnail={selectedHighlight.thumbnail}
                        title={selectedHighlight.title}
                      />

                      <PlayButton className="absolute left-4 bottom-4" />
                    </>
                  )}
                </ListArticle.Media>

                <DialogHeader className="gap-2 mt-4">
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedHighlight.title}
                  </DialogTitle>
                  <DialogDescription className="flex flex-col gap-4 text-[#6b7280]">
                    <span className="text-base text-wiz-white">
                      {selectedHighlight.description}
                    </span>
                    <span>{selectedHighlight.date}</span>
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

export default HighlightContent;
