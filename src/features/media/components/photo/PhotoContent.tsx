import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

import { usePagination } from '@/features/media/hooks/usePagination';
import { photoItems } from '@/features/media/mock_data';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useState } from 'react';

import GridArticle from '@/features/media/common/GridArticle';
import PaginationWithThemeRed from '@/features/media/common/PaginationWithThemeRed';
import Category from './Category';

const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 (임시)
const totalItems = 95; // API에서 받아온 총 아이템 수 (임시)

const PhotoContent = () => {
  // API 연동

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedPhoto = photoItems.find((item) => item.id === selectedId);

  const { currentPage, setCurrentPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <>
      {/* 포토 컨텐츠 */}
      <div className={cn('media-grid')}>
        {photoItems.map(({ id, thumbnail, title, date, catetory }) => (
          <GridArticle key={id} className="cursor-pointer">
            <GridArticle.Media onClick={() => setSelectedId(id)}>
              <GridArticle.Thumbnail thumbnail={thumbnail} title={title} />
              <GridArticle.Overlay
                elements={<Category catetory={catetory} />}
              />
            </GridArticle.Media>
            <GridArticle.Title title={title} />
            <GridArticle.Footer date={date} />
          </GridArticle>
        ))}
      </div>

      <PaginationWithThemeRed
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        className="mt-14"
      />

      {/* 팝업 */}
      <Dialog
        open={selectedId !== null}
        onOpenChange={() => setSelectedId(null)}
      >
        <DialogContent className="w-screen h-screen max-w-none p-0 bg-black/95">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 hover:opacity-100">
            <X className="h-8 w-8 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {selectedPhoto && (
            <div className="h-full flex items-center justify-center">
              <div className="relative max-w-5xl w-full mx-8">
                <GridArticle.Media className="mb-0">
                  <GridArticle.Thumbnail
                    thumbnail={selectedPhoto.thumbnail}
                    title={selectedPhoto.title}
                    className="!object-contain"
                  />
                </GridArticle.Media>

                <div className="bg-gradient-to-t from-black/90 to-transparent">
                  <DialogHeader className="gap-2">
                    <DialogTitle className="text-2xl font-bold text-white">
                      {selectedPhoto.title}
                    </DialogTitle>
                    <DialogDescription className="flex items-center gap-4 text-[#6b7280]">
                      <span>{selectedPhoto.date}</span>
                      <Category catetory={selectedPhoto.catetory} />
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoContent;
