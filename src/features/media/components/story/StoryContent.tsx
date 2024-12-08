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

import ListArticle from '@/features/media/common/ListArticle';
import PaginationWithThemeRed from '@/features/media/common/PaginationWithThemeRed';
import PlayButton from '@/features/media/common/PlayButton';

const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 (임시)
const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const StoryContent = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedStory = storyItems.find((item) => item.id === selectedId);

  const { currentPage, setCurrentPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <>
      {/* 스토리 컨텐츠 */}
      <div className={cn('media-list-grid')}>
        {storyItems.map(({ id, thumbnail, title, date }) => (
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

      {/* 페이지네이션 */}

      <PaginationWithThemeRed
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
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
                <ListArticle.Media
                  className="mb-0"
                  onClick={() => setIsPlaying(true)}
                >
                  {isPlaying ? (
                    <ListArticle.Video
                      src={''}
                      poster={selectedStory.thumbnail}
                    />
                  ) : (
                    <>
                      <ListArticle.Thumbnail
                        thumbnail={selectedStory.thumbnail}
                        title={selectedStory.title}
                      />
                      <PlayButton className="absolute left-4 bottom-4" />
                    </>
                  )}
                </ListArticle.Media>

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
